define(['app','model/message','managers/unread_manager'],function(app){
	app.MessagesManager = Em.Object.extend({
		conversations: Em.A(),
		messages: {},

		initiate: function(){
			var that = this;
			this.loadNewConversations();

			app.unreadManager.addIncreaseObserver(function(){
				that.loadNewConversations();
			});
			app.unreadManager.startPoll();
		},

		oldestConversation: function(){
			return this.conversations.get('lastObject');
		},

		conversationWithID: function(id){
			for (var i = this.conversations.length - 1; i >= 0; i--) {
				var c = this.conversations[i];
				if (id == c.conversationid){
					return c;
				}
			};
			return null;
		},
		conversationWithUsername: function(username){
			for (var i = this.conversations.length - 1; i >= 0; i--) {
				var c = this.conversations[i];
				var u = c.with_user;
				if (u && username == u.username){
					return c;
				}
			};
			return null;
		},
		containsConversation: function(c){
			var result = this.conversationWithID(c.conversationid);
			return (result != null);
		},
		insertConversation: function(c){
			var cs = this.conversations;
			var count = cs.length;
			if (!count) {
				cs.pushObject(c);
				return;
			}

			var index = 0;
			for (; index < count; index++) {
				var conversation = cs[index];
				if (conversation.last_update <= c.last_update){
					break;
				}
			}
			cs.insertAt(index,c);
		},
		updatePositionForConversation: function(c){
			Ember.run.schedule('sync', this, function(){
				this.conversations.removeObject(c);
				this.insertConversation(c);
			});
		},
		updateConversationList: function(news){
			for (var i = 0; i < news.length; i++) {
				var c = news[i];
				var exist = this.conversationWithID(c.conversationid);
				if (exist){
					console.assert((exist._lastAllocTime == c._lastAllocTime),
						'conversation last alloc time not equal');
					this.updatePositionForConversation(exist);
				} else {
					this.insertConversation(c);
				}
			};
		},
		loadingConversations: false,
		_loadConversations: function(laterThan, callback){
			var a = app.currentAPI();
			if (!a) return false;
			a.invisible = true;

			var that = this;
			that.set('loadingConversations',true);
			a.conversationList(laterThan,function(data,error){
				that.set('loadingConversations',false);
				if (error){
				} else {
					var news = Em.A();
					for (var i = 0; i < data.length; i++) {
						var raw = data[i];
						news.pushObject(app.Conversation.alloc(raw));
					};
					that.updateConversationList(news);
				}
				if (callback) callback(data,error);
			});

			return true;
		},
		loadNewConversations: function(callback){
			this._loadConversations(0, function(data, error){
				if (callback) callback(data, error);
			});
		},
		loadingMoreConversations: false,
		loadMoreConversations: function(callback){
			var that = this;
			var oldest = this.oldestConversation();
			var laterThan = 0;
			if (oldest && oldest.last_update) laterThan = oldest.last_update;

			var started = this._loadConversations(laterThan, function(data, error){
				that.set('loadingMoreConversations',false);
				if (callback) callback(data, error);
			});

			if (started) this.set('loadingMoreConversations',true);
		},

		pendingNewConversation: false,
		addConversationWithUsername: function(username,callback){
			var that =this;
			var api = app.currentAPI();
			if (!username || !api || this.pendingNewConversation) return;

			that.set('pendingNewConversation', true);
			api.createConversation(username, function(data, error){
				that.set('pendingNewConversation', false);
				var c = null;
				if (!error){
					var conversation = app.Conversation.alloc(data);
					that.insertConversation(conversation);
					c = conversation;
				}
				if (callback) callback(c,error);
			});
		},
		updateLastViewTimeForConversationID: function(cid){
			var c = this.conversationWithID(cid);
			var ms = this.messagesForConversationID(cid);
			c.updateLastViewTime(ms.get('lastObject.create_at'));
		},
		updateLastUpdateTimeForConversationID: function(cid){
			var c = this.conversationWithID(cid);
			var ms = this.messagesForConversationID(cid);
			var last = ms.get('lastObject.create_at');
			if (last > c.last_update){
				c.set('last_update',last);
				this.updatePositionForConversation(c);
			}
		},

		newFlagsCount: function(){
			var count = 0;
			var cs = this.conversations;
			for (var i = cs.length - 1; i >= 0; i--) {
				if (cs[i].get('newFlag')) count++;
			};
			return count;
		}.property('conversations.@each.newFlag'),

		// message management
		messagesForConversationID: function(cid){
			var ms = this.messages[cid + ''];
			if (!ms) {
				ms = Em.A();
				this.messages[cid + ''] = ms;
			}
			return ms;
		},

		loadingMessageForConversationIDs: {},
		loadMessages: function(cid,params,callback){
			if (!cid) return;
			if (this.loadingMessageForConversationIDs[cid]) return;
			var api = app.currentAPI();
			var that = this;
			if (!api) return;

			params['count'] = 50;
			params['conversation_id'] = cid;

			this.loadingMessageForConversationIDs[cid] = true;
			api.getMessages(params,function(data,error){
				that.loadingMessageForConversationIDs[cid] = false;
				if (callback) callback(data,error);
			});
		},
		loadNewerMessagesForConversationID: function(cid){
			if (!cid) return;
			var ms = this.messagesForConversationID(cid);
			var c = this.conversationWithID(cid);
			var last = ms.get('lastObject');
			var params = {};
			if (last){
				params['since_id'] = last.messageid;
				if (c && c.last_update <= last.create_at) return;
			}
			var that = this;
			this.loadMessages(cid,params,function(data,error){
				if (!error){
					for (var i = 0; i < data.length; i++) {
						ms.pushObject(app.Message.alloc(data[i]));
					};
					that.updateLastViewTimeForConversationID(cid);
				}
			});
		},
		loadOlderMessagesForConversationID: function(cid){
			if (!cid) return;
			var ms = this.messagesForConversationID(cid);
			var first = ms.get('firstObject');
			var params = {};
			if (first){
				params['max_id'] = first.messageid - 1;
			}
			this.loadMessages(cid,params,function(data,error){
				if (!error){
					for (var i = data.length - 1; i >= 0; i--) {
						ms.insertAt(0,app.Message.alloc(data[i]));
					};
				}
			});
		},


		// New Message
		postMessage: function(cid, content, callback){
			if (!cid || !content || !content.length) return;
			var api = app.currentAPI();
			if (!api) return;

			var c = this.conversationWithID(cid);
			if (!c || !c.with_user || !c.with_user.userid) return;

			var ms = this.messagesForConversationID(cid);

			// build a placeholder message.
			var last = ms.get('lastObject');
			var time = (new Date()).getTime();
			if (last) time = last.create_at;

			var data = {
				conversationid: cid,
				userid: app.get('accountManager.currentAccount.user.userid'),
				content: content,
				create_at: time,
			};

			var placeholder = app.Message.create();
			placeholder.setProperties(data);
			placeholder.sending = true;

			ms.pushObject(placeholder);

			// do post
			var that = this;
			api.postMessage(content, c.with_user.userid, function(data, error){
				placeholder.set('sending',false);
				placeholder.set('failed',(error != null));

				if (!error){
					placeholder.setProperties(data);
					that.updateLastUpdateTimeForConversationID(cid);
					that.updateLastViewTimeForConversationID(cid);
				}

				if (callback) callback(data, error);
			});
		},
	});
	app.messagesManager = app.MessagesManager.create();
});
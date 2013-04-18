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
				if (username == c.with_user.username){
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
			for (var i = 0; i < count; i++) {
				var conversation = cs[i];
				if (conversation.last_update <= c.last_update){
					break;
				}
			}
			cs.insertAt(index,c);
		},
		updateConversationList: function(news){
			for (var i = 0; i < news.length; i++) {
				var c = news[i];
				var exist = this.conversationWithID(c.conversationid);
				if (exist){
					console.assert((exist._lastAllocTime == c._lastAllocTime),
						'conversation last alloc time not equal');
					this.conversations.removeObject(exist);
					c = exist;
				}
				this.insertConversation(c);
			};
		},
		loadingConversations: false,
		_loadConversations: function(laterThan, callback){
			var a = app.currentAPI();
			if (!a) return false;

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
			var last = ms.get('lastObject');
			var params = {};
			if (last){
				params['since_id'] = last.messageid;
			}
			this.loadMessages(cid,params,function(data,error){
				if (!error){
					for (var i = 0; i < data.length; i++) {
						ms.pushObject(app.Message.alloc(data[i]));
					};
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
			api.postMessage(content, c.with_user.userid, function(data, error){
				if (error){
					placeholder.set('failed',true);
				} else {
					// TODO: update placeholder to real message.
				}
				if (callback) callback(data, error);
			});
		},
	});
	app.messagesManager = app.MessagesManager.create();
});
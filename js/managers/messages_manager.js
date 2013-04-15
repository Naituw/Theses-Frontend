define(['app','model/message'],function(app){
	app.MessagesManager = Em.Object.extend({
		conversations: Em.A(),
		messages: {},
		loadingMoreConversations: false,

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
					console.assert((exist._lastAllocTime == c._lastAllocTime),'conversation last alloc time not equal');
				} else {
					this.insertConversation(c);
				}
			};
		},
		loadMoreConversations: function(callback){
			var a = app.currentAPI();
			if (a){
				var oldest = this.oldestConversation();
				var laterThan = 0;
				if (oldest && oldest.last_update) laterThan = oldest.last_update;
				var that = this;
				that.set('loadingMoreConversations',true);
				a.conversationList(laterThan,function(data,error){
					that.set('loadingMoreConversations',false);
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
			}
		},
		pollConversations: function(){
			
		}
	});
	app.messagesManager = app.MessagesManager.create();
});
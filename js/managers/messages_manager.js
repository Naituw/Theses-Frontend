define(['app','model/message'],function(app){
	app.MessagesManager = Em.Object.extend({
		conversations: Em.A(),
		messages: {},

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
		containsConversation: function(c){
			var result = this.conversationWithID(c.conversationid);
			return (result != null);
		},
		insertConversation: function(c){
			// TODO: based on update time
			this.conversations.pushObject(c);
		},
		updateConversationList: function(news){
			for (var i = 0; i < news.length; i++) {
				var c = news[i];
				if (this.containsConversation(c)){
					// TODO: check if needs update
				} else {
					this.insertConversation(c);
				}
			};
		},
		loadMoreConversations: function(){
			var a = app.currentAPI();
			if (a){
				var oldest = this.oldestConversation();
				var laterThan = 0;
				if (oldest && oldest.conversationid) laterThan = oldest.conversationid;
				var that = this;
				a.conversationList(laterThan,function(data,error){
					if (error){

					} else {
						var news = Em.A();
						for (var i = 0; i < data.length; i++) {
							var raw = data[i];
							news.pushObject(app.Conversation.alloc(raw));
						};
						that.updateConversationList(news);
					}
				});
			}
		},
	});
	app.messagesManager = app.MessagesManager.create();
});
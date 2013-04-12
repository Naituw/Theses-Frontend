define(['app','text!template/message.hbs','text!template/views/conversation_row.hbs',
    'text!template/views/message_row.hbs'],function(app,tpl,conTpl,mesTpl){
	app.ConversationRow = Em.View.extend({
        template: Em.Handlebars.compile(conTpl),
        conversation: null,
        selected: function(){
            var sid = this.get('controller.selectedConversationID');
            if (!sid) return false;
            console.log(sid);
            return this.conversation.conversationid == sid;
        }.property('controller.selectedConversationID'),
        click: function(){
            this.get('controller').conversationClicked(this.conversation);
        },
    });
    app.MessageRow = Em.View.extend({
        template: Em.Handlebars.compile(mesTpl),
    });
    app.MessageView = Em.View.extend({
		template: Em.Handlebars.compile(tpl),
	});
	app.MessageController = Em.Controller.extend({
		target: function(){
            return this;
        }.property(),
        init: function(){
            app.messageController = this;
        },

        // Open & Close
        opened: true,
        active: true,
        open: function(){
            this.set('opened',true);
            this.set('active',false);
            Em.run.next(this,function(){
                this.set('active',true);
            });
        },
        close: function(){
            this.set('active',false);
            var that = this;
            Em.run.later(function(){
                that.set('opened',false);
            },400);
        },

        // Conversation Selection
        selectedConversationID: 0,
        selectedConversation: function(){
            var id = this.selectedConversationID;
            if (!id) return null;
            return app.messagesManager.conversationWithID(id);
        }.property('selectedConversationID','Theses.messagesManager.conversations.@each'),
        conversationClicked: function(c){
            this.set('selectedConversationID',c.conversationid);
        },

        // New Conversation
        newConversationMode: false,
        pendingNewConversation: false,

        newConversationButtonPressed: function(){
            this.set('selectedConversationID',0),
            this.set('newConversationMode', true);
        },
	});
});
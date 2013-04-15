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
            app.messagesManager.loadMoreConversations();
        },

        // Open & Close
        opened: false,
        active: false,
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

        // Conversations
        selectedConversationID: 0,
        selectedConversation: function(){
            var id = this.selectedConversationID;
            if (!id) return null;
            return app.messagesManager.conversationWithID(id);
        }.property('selectedConversationID','Theses.messagesManager.conversations.@each'),
        conversationClicked: function(c){
            this.set('selectedConversationID',c.conversationid);
        },
        loadMoreConversations: function(){
            app.messagesManager.loadMoreConversations(function(data,error){
                if (error){
                    app.showError('加载更多话题失败',error.message);
                } else {
                    if (!data.length){
                        app.showSuccess('没有更多话题了',null);
                    }
                }
            });
        },

        // New Conversation
        newConversationMode: function(){
            return (!this.get('selectedConversationID'));
        }.property('selectedConversationID'),

        newConversationButtonPressed: function(){
            if (!this.get('newConversationMode')){
                this.set('selectedConversationID',0);
                this.set('newConversationTarget','');
            }
        },

        newConversationTarget: '',
        pendingNewConversation: false,
        newConversationStartButtonDisabled: function(){
            return this.newConversationTarget.length <= 0;
        }.property('newConversationTarget'),
        newConversationStart: function(){
            if (this.get('newConversationStartButtonDisabled')) return;

            var conversation = app.messagesManager.conversationWithUsername(this.newConversationTarget);
            if (conversation){
                this.set('selectedConversationID',conversation.conversationid);
                return;
            }
        },
	});
});
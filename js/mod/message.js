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
        doubleClick: function(){
            if (!this.content || !this.content.failed) return;
            var c = this.get('controller');
            if (c && c.resendMessage){
                c.resendMessage.call(c, this.content);
            }
        },
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
            if (this.selectedConversationID != c.conversationid){
                this.set('selectedConversationID',c.conversationid);
            }
            this.loadMoreMessagesForCurrentConversation();
        },
        showsLoadMoreButton: function(){
            //if (app.get('messagesManager.conversations.length') < 20) return false;
            if (app.get('messagesManager.loadingMoreConversations')) return false;
            return true;
        }.property('Theses.messagesManager.loadingMoreConversations','Theses.messagesManager.conversations.length'),
        loadMoreConversations: function(){
            app.messagesManager.loadMoreConversations(function(data,error){
                if (error){
                    app.showError('加载更多对话失败',error.message);
                } else {
                    if (!data.length){
                        app.showSuccess('没有更多对话了',null);
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

        // Message Management
        selectedMessages: function(){
            var id = this.get('selectedConversationID');
            if (!id) return null;
            return app.messagesManager.messagesForConversationID(id);
        }.property('selectedConversationID'),
        selectedConversationUpdated: function(){
            if (this.get('selectedConversation.last_update')){
                this.loadMoreMessagesForCurrentConversation();
            }
        }.observes('selectedConversation.last_update'),
        loadMoreMessagesForCurrentConversation: function(){
            var c = this.get('selectedConversation');
            var ms = this.get('selectedMessages');
            if (!ms) return;

            if (ms.length){
                var m = ms.get('lastObject');
                // No need to update
                if (c.last_update <= m.create_at) return;
            }

            app.messagesManager.loadOlderMessagesForConversationID(c.conversationid);
        },

        // New Message
        inputedMessageContents: {},
        currentInputMessageContent: function(key, value){
            var cid = this.selectedConversationID;
            if (!cid) return '';
            if (value != null){
                this.inputedMessageContents[cid] = value;
                return value;
            } else {
                var content = this.inputedMessageContents[cid];
                return content || '';
            }
        }.property('selectedConversationID'),
        postButtonPressed: function(){
            var content = this.get('currentInputMessageContent').trim();
            if (!content.length) return;

            var cid = this.get('selectedConversationID');
            if (!cid) return;

            this.sendMessage(cid,content);

            this.set('currentInputMessageContent','');
        },
        sendMessage: function(cid, content){
            app.messagesManager.postMessage(cid,content,function(data,error){
                if (error){
                    app.showError('私信发送失败',error.message);
                }
            });
        },
        resendMessage: function(m){
            if (!m || !m.content || !m.conversationid) return;

            this.get('selectedMessages').removeObject(m);
            this.sendMessage(m.conversationid, m.content);
        },
        selectedMessagesCountChanged: function(){
        }.observes('selectedMessages.length'),
	});
});
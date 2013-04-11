app.MessagesManager = Em.Object.extend({
	conversations: Em.A(),
	messages: {},

	
});
app.messagesManager = app.MessagesManager.create();
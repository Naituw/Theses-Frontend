define(['app','text!template/application.hbs'],function(app,applicationTpl){
	app.ApplicationView = Em.View.extend({
		template: Em.Handlebars.compile(applicationTpl),
	});
	app.ApplicationController = Ember.Controller.extend({
		user: 0,
		currentUserLevel: function(){
			return this.user;
		}.property('user'),
	});
});
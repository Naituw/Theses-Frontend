define(['app'],function(app){
	app.ApplicationView = Em.View.extend({
		template: app.template('application'),
	});
	app.ApplicationController = Ember.Controller.extend({
		user: 0,
		currentUserLevel: function(){
			return this.user;
		}.property('user'),
	});
});
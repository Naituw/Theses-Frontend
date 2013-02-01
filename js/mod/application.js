define(['app','text!template/application.hbs'],function(app,applicationTpl){
	app.LoadingView = Em.View.extend({
		template: Em.Handlebars.compile('<section class="loading-section"><div class="loading-view"></div></section>'),
	});
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
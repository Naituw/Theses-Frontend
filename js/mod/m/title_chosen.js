define(['app','text!template/m/title_chosen.hbs'],function(app,tpl){
	app.TitleChosenView = Em.View.extend({
		template: Em.Handlebars.compile(tpl),
	});
	app.TitleChosenController = Em.Controller.extend({
		
	});
});
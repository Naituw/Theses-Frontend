define(['app','text!template/m/title_choosen.hbs'],function(app,tpl){
	app.TitleChoosenView = Em.View.extend({
		template: Em.Handlebars.compile(tpl),
	});
	app.TitleChoosenController = Em.Controller.extend({
		
	});
});
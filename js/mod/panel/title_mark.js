define(['app','text!template/panel/title_mark.hbs'],function(app,tpl){
	app.TitleMarkView = Em.View.extend({
		template: Em.Handlebars.compile(tpl),
	});
	app.TitleMarkController = Em.Controller.extend({
		
	});
});
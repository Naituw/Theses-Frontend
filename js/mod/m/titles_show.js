define(['app','text!template/m/titles_show.hbs'],function(app,tpl){
	app.TitlesShowView = Em.View.extend({
		template: Em.Handlebars.compile(tpl),
	});
	app.TitlesShowController = Em.Controller.extend({
		
	});
});
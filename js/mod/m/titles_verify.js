define(['app','text!template/m/titles_verify.hbs'],function(app,tpl){
	app.TitlesVerifyView = Em.View.extend({
		template: Em.Handlebars.compile(tpl),
	});
	app.TitlesVerifyController = Em.Controller.extend({
		
	});
});
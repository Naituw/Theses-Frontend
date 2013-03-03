define(['app','text!template/m/titles_admin.hbs'],function(app,tpl){
	app.TitlesAdminView = Em.View.extend({
		template: Em.Handlebars.compile(tpl),
	});
	app.TitlesAdminController = Em.Controller.extend({
		
	});
});
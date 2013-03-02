define(['app','text!template/m/theses.hbs'],function(app,tpl){
	app.ThesesView = Em.View.extend({
		template: Em.Handlebars.compile(tpl),
	});
	app.ThesesController = Em.Controller.extend({
		
	});
});
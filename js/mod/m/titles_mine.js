define(['app','text!template/m/titles_mine.hbs'],function(app,tpl){
	app.TitlesMineView = Em.View.extend({
		template: Em.Handlebars.compile(tpl),
	});
	app.TitlesMineController = Em.Controller.extend({
		canAssignNewTitle: function(){
			var l = app.accountManager.get('currentLevel');
			return l == 40;
		}.property('Theses.accountManager.currentLevel'),
	});
});
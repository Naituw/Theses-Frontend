define(['app','text!template/panel/new_title.hbs'],function(app,tpl){
	app.NewTitleView = Em.View.extend({
		template: Em.Handlebars.compile(tpl),
		didInsertElement: function(){
			var isMobile = navigator.userAgent.match(/(iPhone|iPod|iPad|Android|BlackBerry|webOS)/);
			if(!isMobile) {
 				$('select[multiple="multiple"]').tooltip({title:"按住Ctrl键来选择多个项目"});
			}
		},
	});
	app.NewTitleController = Em.Controller.extend({
	});
});
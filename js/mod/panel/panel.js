define(['app','text!template/panel/panel.hbs','mod/panel/profile','mod/panel/settings','mod/panel/user_edit'],function(app,tpl){
	app.PanelView = Em.View.extend({
		template: Em.Handlebars.compile(tpl),
	});
	app.PanelController = Em.Controller.extend({
		target: function(){
           	return this;
        }.property(),
		init: function(){
        	app.panelController = this;
			this._super();
		},
		name: null,
		desc: null,
		loading: false,
		overlay: function(){
			return $('#panel-overlay');
		}.property().volatile(),
		openPanel: function(){
			var overlay = this.get('overlay');
			overlay.css({'display':''});
			Em.run.later(function(){
				overlay.removeClass('unactive').addClass('active');
			},1);
		},
		closePanel: function(){
			if(this.get('loading')) return;
			var overlay = this.get('overlay');
			overlay.removeClass('active').addClass('unactive');
			var that = this;
			Em.run.later(function(){
				overlay.css({'display':'none'});
			},500);
		},
		openOutlet: function(outlet,name,desc, context){
			this.connectOutlet("content",outlet,context);
			this.set('name',name);
			this.set('desc',desc);
			this.set('loading',false);
			this.openPanel();
		},
	});
});
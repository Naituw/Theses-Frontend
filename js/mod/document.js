define(['app'],function(app){

	app.DocumentView = Em.View.extend({
		template: app.template('document'),
	});
	app.DocumentController = Em.Controller.extend({
		target: function(){
			return this;
		}.property(),
		init: function(){
			app.documentController = this;
		},

		opened: false,
		active: false,

		loadingTemplate: true,

		// type: 2.开题报告 3.检查情况记录表
		startComposeWithType: function(type){
			if (type != 2 && type != 3) return;
			if (this.get('opened')) return;

            this.set('opened',true);
            this.set('active',false);
            Em.run.next(this,function(){
                this.set('active',true);
            });
            app.startModal();
		},
		finishCompose: function(){
			if (!this.get('opened')) return;
            this.set('active',false);
            var that = this;
            Em.run.later(function(){
                that.set('opened',false);
            },400);
            app.endModal();
		},

		cancelLoading: function(){
			if (!this.get('opened') || !this.get('loadingTemplate')) return;
			this.finishCompose();
		}
	});

});
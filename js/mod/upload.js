define(['app','text!template/upload.hbs'],function(app,tpl){
	app.UploadItemView = Em.View.extend({
		classNames: ['upload-item'],
		task: null,
		progress: function(){
			var p = this.get('task.currentProgress');
			p = Math.floor(p * 100);
			return p;
		}.property('task.currentProgress'),
		progressBarStyle: function(){
			var p = this.get('progress');
			return 'width:' + p + '%;';
		}.property('progress'),
		template: Em.Handlebars.compile('<h4>{{desc}}</h4>\
			<a class="upload-cancel" {{action remove target="view"}}><i class="icon-remove"></i></a>\
			<span>{{view.progress}}%</span>\
			<div class="progress progress-striped active">\
	  			<div class="bar" {{bindAttr style="view.progressBarStyle"}}></div>\
			</div>'),
		remove: function(){
			this.get('controller').cancelTask(this.task);
		},
	});

	app.UploadPanelView = Em.View.extend({
        template: Em.Handlebars.compile(tpl),
    });

    app.UploadPanelController = Em.Controller.extend({
    	target: function(){
    		return this;
    	}.property(),
    	opened: true,
    	updatePanelFrame: function(){
    		var that = this;
    		Em.run.later(this,function(){
    			var empty = !app.get('uploadManager.tasks.length');
    			var opened = that.get('opened');

    			var dom = $('#upload-panel');
    			var height = dom.height();
    			var bottom = 0;

    			if (empty) bottom = -height;
    			else if (!opened) bottom = -(height - 22);

    			if (!empty) dom.show();

    			dom.animate({
    				bottom: bottom,
    			}, 200, function(){
    				if (empty) dom.hide();
    			});
    		},100);
    	}.observes('Theses.uploadManager.tasks.length','opened'),
    	togglePanel: function(){
    		this.set('opened',!this.opened);
    	},
    	cancelTask: function(task){
    		app.uploadManager.cancelTask(task);
    	},
    });
});
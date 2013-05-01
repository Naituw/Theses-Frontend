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

		loadingTemplate: false,
		templateLoaded: false,
		pendingSend: false,
		canceled: false,
		pageViewClass: function(){
			if (this.get('canceled')) return 'inactive';
			if (this.get('loadingTemplate')) return 'inactive';
			if (this.get('pendingSend')) return 'pending';
			if (this.get('templateLoaded')) return null;
			return 'inactive';
		}.property('loadingTemplate','pendingSend','canceled','templateLoaded'),

		showsLoadingView: function(){
			return this.get('loadingTemplate') || this.get('pendingSend');
		}.property('loadingTemplate','pendingSend'),
		loadingViewText: function(){
			if (this.get('loadingTemplate')) return '正在加载模板...';
			else if (this.get('pendingSend')) return '正在发送...';
			else return '加载中';
		}.property('loadingTemplate','pendingSend'),

		// type: 2.开题报告 3.检查情况记录表
		currentComposeType: 0,
		startComposeWithType: function(type){
			if (type != 2 && type != 3) return;
			if (this.get('opened')) return;

			this.set('currentComposeType',type);
            this.set('opened',true);
            this.set('active',false);
            this.set('loadingTemplate',false);
            this.set('pendingSend',false);
            this.set('canceled', false);
            this.set('templateLoaded', false);
            Em.run.next(this,function(){
                this.set('active',true);

                this.set('loadingTemplate',true);
                Em.run.later(this, function(){
                	var that = this;
                	this.loadTemplate(type, function(content, error){
                		that.set('loadingTemplate',false);
                		if (error || !content){
                			that.set('canceled',true);
                			app.showError('加载模板失败');
                			that.finishCompose();
                		} else {
                			$('.document-page-container').html(content);
                			Em.run.later(this,function(){
                				that.set('templateLoaded', true);
                			},100);
                		}
               		})
                }, 400);
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

		templates: {},
		loadTemplate: function(type,callback){
			if (!type) callback(null, null);
			var cache = this.templates[type];
			if (cache) {
				if (callback) {
					callback(cache, null);
				}
				return;
			}

			var that = this;

			$.get('/document_templates/' + type + '.html?' + new Date().getTime(), function(data){
				that.templates[type] = data;
				if (callback) callback(data, null);
			}).fail(function(){
				if (callback) callback(null, {message: '获取模板失败'});
			});
		},

		cancelLoading: function(){
			if (!this.get('opened') || !this.get('loadingTemplate')) return;
			this.finishCompose();
		},
		cancelComposing: function(){
			var that = this;
			app.confirmationManager.addRequest('确认要关闭此页吗？','已经填写的内容将无法恢复',function(){
				that.set('canceled',true);
				Em.run.later(that, function(){
					that.finishCompose();
				}, 400);
			});
		},

		post: function(){
			this.set('pendingSend',true);
			var that = this;
			Em.run.later(this, function(){
				that.finishCompose();
				app.showSuccess('论文上传成功');
			},1200);
		},
	});

});
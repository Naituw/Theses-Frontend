define(['app','text!template/panel/title_mark.hbs'],function(app,tpl){
	app.TitleMarkView = Em.View.extend({
		template: Em.Handlebars.compile(tpl),
		didInsertElement: function(){
			var controller = this.get('controller');
			if (controller && controller.viewDidLoad) controller.viewDidLoad();

			this.foreachTextField(function(index,el){
				var view = Em.View.views[$(el).attr('id')];
				view.focusIn();
			});
		},

		foreachTextField: function(func){
			this.$().find('.theses-text-field').each(func);
		},
		dataValid: function(){
			var valid = true;
			this.foreachTextField(function(index,el){
				var view = Em.View.views[$(el).attr('id')];
				if (!view.get('isValid')){
					valid = false;
				}
			});
			return valid;
		},
		submit: function(){
			this.foreachTextField(function(index,el){
				var view = Em.View.views[$(el).attr('id')];
				view.focusOut();
			});

			var that = this;
			Em.run.later(function(){
				var valid = that.dataValid();
				if (valid){
					that.get('controller').submit();
				}
			},100);
		},
	});
	app.TitleMarkController = Em.Controller.extend({
		userselection: null,
		userselectionBinding: Ember.Binding.oneWay("content"),

		articleScore: 0,
		oralScore: 0,
		comment: null,
		updateView: function(){
			var as = '';
			var os = '';
			var cmt = '';
			if (this.userselection && this.userselection.selection){
				as = this.userselection.selection.articleScore || '';
				os = this.userselection.selection.oralScore || '';
				cmt = this.userselection.selection.comment;
			}
			this.set('articleScore',as);
			this.set('oralScore',os);
			this.set('comment',cmt);
		},
		userselectionChanged: function(){
			this.updateView();
		}.observes('userselection'),
		submitting: false,
		submit: function(){			
			if (this.submitting) return;
			if (!this.userselection || !this.userselection.selection) return;

			var as = this.articleScore + '';
			var os = this.oralScore + '';
			var cmt = this.comment;

			if (!as.length) as = 0;
			if (!os.length) os = 0;

			as = parseInt(as);
			os = parseInt(os);

			var params = {
				titleid : this.userselection.selection.titleid,
				studentid: this.userselection.selection.studentid,
				atricle_score: as,
				oral_score: os,
				comment: cmt,
			};

			var api = app.currentAPI();
			var that = this;
			if (api){
				app.panelController.set('loading',true);
				this.set('submitting',true);
				api.markTitle(params,function(data,error){
					app.panelController.set('loading',false);
					if (error){
						that.set('submitting',false);
						app.showError('评分失败',error.message);
					} else {
						app.showSuccess('评分成功');
						var sel = app.Selection.alloc(data[0]);
						that.userselection.selection.setProperties(sel);
						app.panelController.closePanel();
					}
				});
			}
		},

		viewDidLoad: function(){
			this.updateView();
			this.set('submitting',false);
		},
	});
});
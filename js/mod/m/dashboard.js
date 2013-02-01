define(['app','text!template/m/dashboard.hbs'],function(app,tpl){
	app.DashboardView = Em.View.extend({
		template: Em.Handlebars.compile(tpl),
		didLoadMilestones: function(){
			var old = this.$();
			if (old) {
				old.find('.datepicker').datepicker('remove');
			}
			if(!this.get('controller').get('loadingMilestones')){
				var that = this;
				Em.run.later(function(){
					var pickers = that.$().find('.datepicker');
					pickers.datepicker({
						language: 'zh-CN',
						autoclose: true,
					}).on('changeDate', function(ev){
						var name = $(this).find('input').attr('name');
						if (name){
							var date = ev.date;
							app.milestoneManager.updateMilestoneForName(name, date.getTime());
						}
						that.get('controller').pickerDidChange();
					});
				},100);
			}
		}.observes('controller.loadingMilestones'),
		willDestroyElement: function(){
			var pickers = this.$().find('.datepicker');
			pickers.datepicker('remove');
		},
		submittingTimes: false,
		submitTimesPressed: function(){
			if (this.submittingTimes) return;
			var controller = this.get('controller');
			if (!controller) return;
			var stones = controller.get('milestones');
			var lastTime = stones.get('lastObject').get('time');
			var wrong = false;
			for (var i = stones.length - 1; i >= 0; i--) {
				var s = stones[i];
				var t = s.get('time');
				if (t){
					if (lastTime && lastTime < t) {
						wrong = true;
						break;
					}
					lastTime = t;
				}
			}

			if (wrong){
				app.showError('提交失败','请检查时间的先后顺序');
			} else {
				controller.submitTimes();
			}
		},
		clearTime: function(s){
			var stone = s.context;
			stone.set('time',0);
			var view = this.$().find('input[name=' + stone.name + ']');
			view.val('');
			if (view){
				view.parent('.datepicker').datepicker('update');
			}
			this.get('controller').pickerDidChange();
		},
	});
	app.DashboardController = Em.Controller.extend({
		loadingMilestones: function(){
			return app.milestoneManager.get('loading');
		}.property('Theses.milestoneManager.loading'),
		milestones: function(){
			return app.milestoneManager.get('milestones');
		}.property('Theses.milestoneManager.milestones.@each'),
		currentStone: function(){
			return app.milestoneManager.get('currentStone');
		}.property('Theses.milestoneManager.currentStone'),
		canOperation: function(){
			if (app.accountManager.get('currentAccount').user.level >= 60){
				return true;
			}
			return false;
		}.property('Theses.accountManager.currentAccount.user.level'),
		pickerChanged: false,
		pickerDidChange: function(){
			this.set('pickerChanged',true);
		},
		submitTimesButtonClass: function(){
			var c = 'btn btn-mini ';
			if (this.get('pickerChanged')){
				c += 'btn-warning ';
			}
			if (this.get('loadingMilestones')){
				c += 'spin '
			}
			return c;
		}.property('pickerChanged','loadingMilestones'),
		submitTimes: function(){
			var that = this;
			app.milestoneManager.submitStones(function(){
				that.set('pickerChanged',false);
			});
		},
	});
});
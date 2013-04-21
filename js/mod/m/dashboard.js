define(['app','text!template/m/dashboard.hbs','text!template/views/notice_row_view.hbs'],function(app,tpl,cellTpl){
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
		didInsertElement: function(){
			var controller = this.get('controller');
			if (controller && controller.viewDidLoad) controller.viewDidLoad();
		},
	});




	app.DashboardController = Em.Controller.extend({
		target: function(){
			return this;
		}.property(),

		// Notices
		canPostNotice: function(){
			return (app.get('accountManager.currentAccount.user.level') >= app.Levels.admin);
		}.property('Theses.accountManager.currentAccount.user.level'),
		newNoticeButtonPressed: function(){
			app.get('panelController').openOutlet('newNotice','新通知','发布新通知');
		},
		reloadNoticeButtonPressed: function(){
			if (this.loadingNotices) return;
			this.refresh();
		},

		notices: Em.A(),
		loadingNotices: false,
		currentNoticePage: 1,
		loadNotices: function(){
			if (this.loadingNotices) return;

			var a = app.currentAPI();
			if (!a) return;

			var self = this;
			this.set('loadingNotices',true);

			a.getNotifications(this.currentNoticePage,function(data,error){
				self.set('loadingNotices',false);
				var notices = self.get('notices');
				notices.clear();
				if (error){
					app.showError('通知获取失败',error.message);
				}else {
					for (var i = 0; i < data.length; i++) {
						var t = app.Notice.alloc(data[i]);
						notices.pushObject(t);
					};
				}
			});
		},
		hasMoreNotices: function(){
			return this.get('notices.length') > 0;
		}.property('notices.length'),
		refresh: function(){
			this.set('currentNoticePage',1);
			this.loadNotices();
		},
		pageUpdated: function(){
			this.loadNotices();
		}.observes('currentNoticePage'),
		loadedNotice: false,
		deleteNotice: function(notice){
			var api = app.currentAPI();
			if (!notice || !notice.notificationid || !api) return;
			var that = this;

			app.confirmationManager.addRequest('确认要删除此通知吗？','数据将无法被恢复',function(){
            	that.notices.removeObject(notice);
				api.deleteNotification(notice.notificationid, function(data,error){
					if (error){
						app.showError('通知删除失败', error.message);
					} else {
						app.showSuccess('通知删除成功');
					}
				}); 
            });
		},
		viewDidLoad: function(){
			if (!this.loadedNotice){
				Em.run.later(this,function(){
					this.refresh();
				},100);
				this.loadedNotice = true;
			}
		},


		// Milestones
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
				c += 'spin ';
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



	app.NoticeRowView = Em.View.extend({
		template: Em.Handlebars.compile(cellTpl),
		classNames: ['notice-row-view'],
		opened: false,
		click: function(e){
			var url = this.notice.url;
			if (url){
				var win=window.open(url, '_blank');
  				win.focus();
			} else {
				this.set('opened',!this.opened);
			}
		},

		notice: null,
		publisher: function(){
			if (!this.notice) return '未知用户';
			else if (this.notice.deptid) return '系管理员';
			else return '学院管理员';
		}.property('notice.deptid'),
		time: function(){
			if (!this.notice.create_at) return '未知时间';
			function convertDateToUTC(date) { 
    			return new Date(date.getUTCFullYear(), date.getUTCMonth(), date.getUTCDate(), date.getUTCHours(), date.getUTCMinutes(), date.getUTCSeconds()); 
    		}
    		var date = convertDateToUTC(new Date(this.notice.create_at));
			return date.format('yyyy年MM月dd日 hh:mm:ss');
		}.property('notice.create_at'),

		showsDeleteButton: function(){
			var deptid = app.get('accountManager.currentAccount.user.departmentInfo.deptid');
			var level = app.get('accountManager.currentAccount.user.level');
			var noticedept = this.get('notice.deptid');

        	if (noticedept){
        		if (noticedept != deptid) return false;
        		return level < app.Levels.superAdmin && level >= app.Levels.admin;
        	} else {
        		return level >= app.Levels.superAdmin;
        	}
		}.property('notice.deptid','Theses.accountManager.currentAccount.user.level'),
		deleteNotice: function(){
			if (!this.notice) return;
			var controller = this.get("controller");
			if (controller && controller.deleteNotice){
				controller.deleteNotice(this.notice);
			}
			return false;
		},
	});
});
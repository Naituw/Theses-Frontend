define(['app'],function(app){
	app.ChosenTitleCell = Em.View.extend({
		template: app.template('views/chosen_title_cell'),
		classNames: ['review-title-cell'],

		opened: false,
		click: function(e){
			this.set('opened',!this.opened);
		},

		pendingState: false,
		processed: false,
		choose: function(){
			if (this.get('controller.pendingSelection')){
				return;
			}

			if (this.pendingState) return;
			if (!this.title || !this.title.titleid) return;

			var a = app.currentAPI();
			if (a){
				var self = this;
				var c = this.get('controller');
				this.set('pendingState',true);
				if (c) c.set('pendingSelection',true);
				a.chooseTitle(this.title.titleid, function(data,error){
					self.set('pendingState',false);
					c = self.get('controller');
					if (c) {
						c.set('pendingSelection',false);
					}
					if (error) {
						app.showError('选择论题失败',error.message);
					} else {
						self.set('proccessed',true);
						var c = self.get('controller');
						if (c && c.didSelectTitle){
							var t = app.Title.alloc(data);
							c.didSelectTitle(t);
						}
					}
				});
			}
		},

		chooseButtonClicked: function(){
			if (this.get('controller.pendingSelection')){
				return false;
			}

			var that = this;
			app.confirmationManager.addRequest(this.title.title,'确认要选择此论题吗？此操作将无法撤销。',function(){
                that.choose();
            });
			return false;
		},

		title: null,
		requirements: function(){
			var r = this.get('title.require_info');
			if (r && r.length) return r;
			return '无';
		}.property('title.require_info'),
		avaliableMajors: function(){
			if (!this.title) return '';
			var ms = this.title.available_major;
			if (Object.prototype.toString.call(ms) != '[object Array]') return '';
			var results = Em.A();
			for (var i = ms.length - 1; i >= 0; i--) {
				var id = ms[i];
				var m = app.majorsManager.marjorWithID(id);
				if (m){
					results.pushObject(m.name);
				}
			};
			return results.join(' , ');
		}.property('title','Theses.majorsManager.departments.@each'),
	});

	app.TitleChosenView = Em.View.extend({
		template: app.template('m/title_chosen'),
	});
	app.TitleChosenController = Em.Controller.extend({
		target: function(){
			return this;
		}.property(),

		titles: Em.A(),
		loading: false,
		currentPage: 1,
		hasMoreTitles: function(){
			return this.get('titles.length') > 0;
		}.property('titles.length'),
		getTitles: function(){
			if (this.loading) return;

			var a = app.currentAPI();
			if (a){
				var self = this;
				this.set('loading',true);

				a.getAvailableTitles(this.currentPage,function(data,error){
					self.set('loading',false);
					var titles = self.get('titles');
					titles.clear();
					if (error){
						app.showError('论题获取失败',error.message);
					}else {
						for (var i = 0; i < data.length; i++) {
							var t = app.Title.alloc(data[i]);
							titles.pushObject(t);
						};
					}
				});
			}
		},
		refresh: function(){
			this.set('currentPage',1);
			this.getTitles();
		},
		pageUpdated: function(){
			this.getTitles();
		}.observes('currentPage'),

		pendingSelection: false,
		didSelectTitle: function(title){
			app.showSuccess('选题成功','您已选择: ' + title.title);
			app.router.transitionNext('root.main.titlesMine');
			app.myTitlesManager.addTitle(title);
		},
	});
});
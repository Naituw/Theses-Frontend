define(['app'],function(app){
	app.ReviewTitleCell = Em.View.extend({
		template: app.template('views/review_title_cell'),
		classNames: ['review-title-cell'],

		opened: false,
		click: function(e){
			this.set('opened',!this.opened);
		},

		pendingState: false,
		postState: function(pass){
			if (this.pendingState) return;
			if (!this.title || !this.title.titleid) return;

			var a = app.currentAPI();
			if (a){
				var self = this;
				this.set('pendingState',true);
				a.reviewTitle(this.title.titleid, pass, function(data,error){
					self.set('pendingState',false);
					if (error) {
						app.showError('审核论文失败',error.message);
					} else {
						self.set('proccessed',true);
					}
				});
			}
		},
		allow: function(){
			this.postState(true);
			return false;
		},
		deny: function(){
			this.postState(false);
			return false;
		},

		proccessed: false,

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
	app.TitlesVerifyView = Em.View.extend({
		template: app.template('m/titles_verify'),
	});
	app.TitlesVerifyController = Em.Controller.extend({
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

				a.getWaitingForReviewTitles(this.currentPage,function(data,error){
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
	});
});
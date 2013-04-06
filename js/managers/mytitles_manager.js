define(['app'],function(app){
	app.MyTitlesManager = Em.Object.extend({
		mytitles: Em.A(),
		loadedPage: 0,
		hasMore: false,
		loading: false,

		// Title Selection.
		currentUserIsStudent: function(){
			return app.get('accountManager.currentAccount.user.level') == app.Levels.student;
		}.property('Theses.accountManager.currentAccount.user.level'),
		currentUserHasAuth: function(){
			var l = app.get('accountManager.currentAccount.user.level');
			return (l >= app.Levels.student && l <= app.Levels.seniorTeacher);
		}.property('Theses.accountManager.currentAccount.user.level'),

		hasValidTitle: function(){
			if (!this.loadedPage){
				this.loadMyTitlesIfNeeded();
				return false;
			}
			for (var i = this.mytitles.length - 1; i >= 0; i--) {
				var title = this.mytitles[i];
				if (title.get('valid')) return true;
			};
			return false;
		}.property('mytitles.@each'),

		canSelectTitleNow: function(){
			if (!this.get('currentUserIsStudent')) return false;
			if (!app.get('milestoneManager.isTitleChosenTime')) return false;
			if (this.get('hasValidTitle')) return false;
			return true;
		}.property('currentUserIsStudent','Theses.milestoneManager.isTitleChosenTime','hasValidTitle'),

		containsTitle: function(title){
			for (var i = this.mytitles.length - 1; i >= 0; i--) {
				var t = this.mytitles[i];
				if (t.titleid == title.titleid) return true;
			};
			return false;
		},

		loadNextPageTitles: function(){
			if (!this.get('currentUserHasAuth')) return;

			if (this.loading) return;

			var api = app.currentAPI();
			if (api){
				this.set('loading',true);
				var that = this;
				var page = this.get('loadedPage') + 1;
				api.getMyTitles(page, function(data, error){
					that.set('loading',false);
					var titles = that.get('mytitles');
					if (error){
						app.showError('论题获取失败',error.message);
					}else {
						that.set('mytitlesLoaded',true);
						var count = data.length;
						var validTitle = Em.A();

						for (var i = 0; i < count; i++) {
							var t = app.Title.alloc(data[i]);
							if (!that.containsTitle(t)){
								validTitle.pushObject(t);
							}
						};

						var validCount = validTitle.length;
						for (var i = 0; i < validCount; i++) {
							var title = validTitle[i];
							titles.pushObject(title);
						};

						that.set('hasMore',(validCount > 0));
						that.set('loadedPage',page);
					}
				});
			}
		},

		reloadMyTitles: function(){
			this.set('loadedPage',0);
			this.set('hasMore',false);
			this.mytitles.clear();
			this.loadNextPageTitles();
		},
		loadMyTitlesIfNeeded: function(){
			if (!this.get('loadedPage')){
				this.reloadMyTitles();
			}
		},
	});
	app.myTitlesManager = app.MyTitlesManager.create();
});
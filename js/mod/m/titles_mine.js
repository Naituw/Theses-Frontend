define(['app','text!template/m/titles_mine.hbs'],function(app,tpl){
	app.TitlesMineView = Em.View.extend({
		template: Em.Handlebars.compile(tpl),
	});
	app.TitlesMineController = Em.Controller.extend({
		target: function(){
            return this;
        }.property(),
		canAssignNewTitle: function(){
			var l = app.accountManager.get('currentLevel');
			return l == 40;
		}.property('Theses.accountManager.currentLevel'),

		assignNew: function(){

		},

		titles: Em.A(),
		loading: false,
		currentPage: 1,
		hasMoreTitles: function(){
			return this.get('titles.length') > 0;
		}.property('titles.length'),
		loadTitles: function(){
			var api = app.currentAPI();
			if (api){
				this.set('loading',true);
				var that = this;

				api.getMyTitles(this.get('currentPage'), function(data, error){
					that.set('loading',false);
					var titles = that.get('titles');
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
			this.loadTitles();
		},
		pageUpdated: function(){
			this.loadTitles();
		}.observes('currentPage'),
	});
});
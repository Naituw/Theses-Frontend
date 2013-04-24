define(['app'],function(app){
	app.TitlesMineView = Em.View.extend({
		template: app.template('m/titles_mine'),
	});
	app.TitlesMineController = Em.Controller.extend({
		target: function(){
            return this;
        }.property(),
        init: function(){
        	app.myTitlesManager.loadMyTitlesIfNeeded();
        },
		canAssignNewTitle: function(){
			if (app.accountManager.get('currentLevel') != 40) return false;
			var m = app.milestoneManager;
			return (m.get('isTitleAssignTime') || m.get('isTitleChosenTime'));
		}.property('Theses.accountManager.currentLevel','Theses.milestoneManager.currentStone'),

		assignNew: function(){
			app.panelController.openOutlet('newTitle','出新论题','创建新论题');
		},


		refresh: function(){
			app.myTitlesManager.reloadMyTitles();
		},
		loadMore: function(){
			app.myTitlesManager.loadNextPageTitles();
		},
	});
});
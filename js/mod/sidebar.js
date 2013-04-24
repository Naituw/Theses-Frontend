define(['app'],function(app){
	app.SidebarView = Em.View.extend({
		template: app.template('sidebar'),
	});
	app.SidebarController = Em.Controller.extend({
		target: function(){
            return this;
        }.property(),
        selectedIndex: 0,
		items: function(){
			var router = app.get('router');
			return router.getStateByPath(router,'root.main').get('childStates').filter(function(item){
				if (!item.sidebar) return false;
                var account = app.get('accountManager').get('currentAccount');
                if (account && account.user && account.user.level >= item.level)
                {
                    if (item.maxLevel && account.user.level > item.maxLevel) return false;
                    return true;
                }
                return false;
            });
		}.property('Theses.accountManager.currentAccount.user.level'),
		itemPressed: function(event){
			app.get('router').transitionNext(event.context.get('path'));
        },
        currentUser: function(){
        	var a = app.accountManager.get('currentAccount');
        	if (a) return a.get('user');
        	return null;
        }.property('Theses.accountManager.currentAccount.user'),
	});
	
});
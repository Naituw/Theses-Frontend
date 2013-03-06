define(['app','text!template/main.hbs','mod/sidebar','mod/navbar','model/account_manager'],function(app,tpl){
    app.MainView = Em.View.extend({
        template: Em.Handlebars.compile(tpl),
        didInsertElement: function ()
        {
            $(window).resize();
        },
    });
    app.MainController = Em.Controller.extend({
        target: function(){
            return this;
        }.property(),
        init: function(){
            var manager = app.get('accountManager');
            manager.addObserver('signed',function(){
                if(!manager.get('signed')){
                    Em.run.later(function(){
                        window.location.reload(false); 
                    },10);
                }
            });
            app.mainController = this;
            this._super();
        },
        currentTitle: function(){
            var currentState = app.get('router').get('currentState');
            return currentState.title;
        }.property('Theses.router.currentState'),
        navItems: function(){
            var router = app.get('router');
            var currentState = router.get('currentState');
            var root = router.getStateByPath(router,'root');
            var items = Em.A();
            var state = currentState;
            while(state){
                if(state === root) break;
                if(state.navitem) {
                    items.insertAt(0, state);
                }
                state = state.get('parentState');
            }
            return items;
        }.property('Theses.router.currentState'),
        currentNavItem: function(){
            var items = this.get('navItems');
            return items.get('lastObject');
        }.property('Theses.router.currentState'),
        currentNavTitle: function(){
            var items = this.get('navItems');
            var title = null;
            for (var i = items.length - 1; i >= 0; i--) {
                var item = items[i];
                title = item.get('title');
                if (title) break;
            };
            return title;
        }.property('navItems'),
        navItemPressed: function(event){
            var route = event.context;
            app.get('router').transitionNext(route.get('path'));
        },
    });
});
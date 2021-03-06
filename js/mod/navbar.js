define(['app'],function(app,tpl){
	app.NavbarView = Em.View.extend({
        template: app.template('navbar'),
    });
    app.NavbarController = Em.Controller.extend({
        target: function(){
            return this;
        }.property(),
        currentAccount: function(){
        	return app.get('accountManager').get('currentAccount');
        }.property('Theses.accountManager.currentAccount'),
        signout: function(){
            app.confirmationManager.addRequest('确认要退出吗？','页面将会刷新',function(){
                app.get('accountManager').signout();
            });
        },
        profile: function(){
            app.get('panelController').openOutlet('panelProfile','用户资料','更新你的账户信息');
        },
        settings: function(){
            app.get('panelController').openOutlet('panelSettings','设置','更换密码');
        },
        message: function(){
            app.messageController.open();
        },
    });
});
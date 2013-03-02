define(['app','text!template/navbar.hbs'],function(app,tpl){
	app.NavbarView = Em.View.extend({
        template: Em.Handlebars.compile(tpl),
    });
    app.NavbarController = Em.Controller.extend({
        target: function(){
            return this;
        }.property(),
        currentAccount: function(){
        	return app.get('accountManager').get('currentAccount');
        }.property('Theses.accountManager.currentAccount'),
        signout: function(){
            app.get('accountManager').signout();
        },
        profile: function(){
            app.get('panelController').openOutlet('panelProfile','用户资料','更新你的账户信息');
        },
        settings: function(){
            app.get('panelController').openOutlet('panelSettings','设置','更换密码');
        }
    });
});
define(['app','router'],function(app){
	app.LoginView = Em.View.extend({
		template: app.template('login'),
		didInsertElement: function ()
        {
            this.$().fadeOut(0);
            this.$().fadeIn(250);
        },
	});
	app.LoginStateManager = Em.StateManager.extend({
		isWaiting: false,
		showError: function(text) {
			$('#login-alert .desc').html(text);
		    $('#login-alert').stop().css('opacity',1).show().fadeOut(3000);
		},
		home: Em.State.extend({
		    enter: function(manager){
		    	manager.set('isWaiting',false);
		    },
		}),
		waiting: Em.State.extend({
			enter: function(manager){
				var username = $('#inputUsername').val();
				var password = $('#inputPassword').val();
				var shouldStore = false;
				if($('#login-remember-me').attr('checked'))shouldStore = true;
				if (!username || !username.length){
					app.showError('登陆失败','用户名不能为空！');
					Em.run.later(function(){
						manager.transitionTo('home');
					},1);
				}else if (!password || !password.length){
					app.showError('登陆失败','密码不能为空！');
					Em.run.later(function(){
						manager.transitionTo('home');
					},1);
				}else {
					manager.set('isWaiting',true);
					app.accountManager.signin(username,password,shouldStore,function(data,error){
						manager.transitionTo('home');
						if (error){
							app.showError('登陆失败',error.message);
						}else{
							app.showSuccess('登陆成功','欢迎回来！');
							var appController = app.get('router').get('applicationController');
							appController.set('user',20);
							app.get('router').transitionTo('root.main.index');
						}
					});
				}
			}
		}),
	})
	app.LoginController = Em.ObjectController.extend({
		init: function(){
			this.get('loginStateManager').transitionTo('home');
			this.get('loginStateManager').controller = this;
		},
		target: function(){
        	return this;
        }.property(),
		tryLogin: function(){
			if(this.get('loginStateManager').get('isWaiting')) return;
			this.get('loginStateManager').transitionTo('waiting');
		},
		pending: function(){
			return this.get('loginStateManager.isWaiting');
		}.property('loginStateManager.isWaiting'),
		signinButtonTitle: function(){
			if (this.get('loginStateManager.isWaiting')) return '验证中...';
			else return '登陆';
		}.property('loginStateManager.isWaiting'),
		loginStateManager: app.LoginStateManager.create(),
	});
});
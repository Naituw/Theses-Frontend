define(['app','text!template/login.hbs','router'],function(app,tpl){
	app.LoginView = Em.View.extend({
		template: Em.Handlebars.compile(tpl),
		didInsertElement: function ()
        {
            this.$().fadeOut(0);
            this.$().fadeIn(250);
        },
	});
	app.LoginStateManager = Em.StateManager.extend({
		_isWaiting: false,
		setWaiting: function(waiting){
			if (this._isWaiting != waiting){
				this._isWaiting = waiting;
				if (waiting) {
					$('#login-activity').show();
					$('#login-submit-button').addClass('disabled');
				}else {
					$('#login-activity').hide();
					$('#login-submit-button').removeClass('disabled');
				}
			}
		},
		isWaiting: function(){
			return this._isWaiting;
		}.property(),
		showError: function(text) {
			$('#login-alert .desc').html(text);
		    $('#login-alert').stop().css('opacity',1).show().fadeOut(3000);
		},
		home: Em.State.extend({
		    enter: function(manager){
		    	manager.setWaiting(false);
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
					manager.setWaiting(true);
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
		loginStateManager: app.LoginStateManager.create(),
	});
});
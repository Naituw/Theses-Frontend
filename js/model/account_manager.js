define(['app','model/account'],function(app){
	app.accountManager = Ember.Object.create({
		accounts: Em.A(),
		apiRoot: function(){
			return app.apiRoot;
		}.property(),
		currentAccount: function(){ // 当前账号
			// 暂不实现多账户
			if (this.accounts.length > 0) return this.accounts[0];
			else return null;
		}.property('accounts.@each'),
		signed: function(){
			return (this.get('currentAccount') != null);
		}.property('currentAccount'),
		init: function(){
			this.loadSavedAccount();
			this.reloadCurrentAccountProfile();
		},
		addAccount: function(account, shouldStore){
			this.accounts.pushObject(account);
			if(shouldStore && account.authToken){
				this.storeAccount(account);
			}
		},
		storeAccount: function(account){
			// 不保存账号密码明文
			account.username = null; account.password = null;
			if(account.user){
				// 需要account有user对象（通过验证）才保存
				var savedAccounts = this._savedAccounts();
				savedAccounts.push(account);
				localStorage['theses-accounts'] = JSON.stringify(savedAccounts);
			}
		},
		signin: function(username, password, store, callback){
			var that = this;
			var account = app.Account.create({
				username: username,
				password: password,
				apiRoot: that.get('apiRoot'),
			});
			account.api().verifyCredentials(function(data,error){
				if (error) {
				}else {
					account.user = app.User.create(data);
					that.addAccount(account,store);
				}
				if(callback)callback(data,error);
			});
		},
		signout: function(){
			this.removeAccount();
		},
		removeAccount: function(account){
			localStorage['theses-accounts'] = null;
			while(this.accounts.length > 0){
				this.accounts.popObject();
			}
		},
		_savedAccounts: function(){
			var savedAccounts = localStorage['theses-accounts'];
			if (savedAccounts) {savedAccounts = JSON.parse(savedAccounts)};
			if (!savedAccounts) savedAccounts = [];
			return savedAccounts;
		},
		loadSavedAccount: function(){
			var accounts = this._savedAccounts();
			while(accounts.length > 0){
				var rawAccount = accounts.pop();
				this.accounts.pushObject(app.Account.alloc(rawAccount));
			}
		},
		updateCurrentAccountWithData: function(data){
			var account = this.get('currentAccount');
			account.get('user').update(data);
			var accounts = [account];
			localStorage['theses-accounts'] = JSON.stringify(accounts);
		},

		reloadCurrentAccountProfile: function(){
			var a = this.get('currentAccount');
			if (a){
				var that = this;
				a.api().verifyCredentials(function(data,error){
					if (!error){
						that.updateCurrentAccountWithData(data);
					}else if (error.code == 403){
						// Sign out?
					}
				});
			}
		},

		// actions
		updateProfile: function(params, callback){
			var account = this.get('currentAccount');
			var that = this;
			account.api().updateProfile(params, function(data,error){
				if (error) {
					app.showError('更新失败',error.message);
				} else {
					that.updateCurrentAccountWithData(data);
				}
				if (callback) callback(data, error);
			});
		},
		updateAvatar: function(file){
			var that = this;
			this.get('currentAccount').api().updateAvatar(file, function(data, error){
				if(error){
					app.showError('头像上传失败',error.message);
				}
				else{
					that.updateCurrentAccountWithData(data);
				}
			});
		},
		updatePassword: function(oldpsw, newpsw, callback){
			var account = this.get('currentAccount');
			if (!account) return;

			account.api().updatePassword(oldpsw, newpsw, function(data, error){
				if (error) {
					app.showError('密码修改失败',error.message);
				} else {
					app.showSuccess('成功','密码已修改成功');
					var token = account.tokenWithPassword(newpsw);
					data.autoToken = token;
					this.updateCurrentAccountWithData(data);
				}
				if(callback){
					callback(error == null);
				}
			});
		}
	});
});
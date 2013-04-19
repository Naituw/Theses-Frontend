define(['app','model/model','model/api'],function(app){
	app.Account = app.Model.extend({
		username: null,
		password: null,
		authToken: null,
		tokenWithPassword: function(psw){
			var username = this.get('username') || this.get('user.username');
			if (!username) return null;
			return 'Basic ' + $.base64.encode(username + ':' + psw);
		},
		user: null,
		apiRoot: null,
		api: function(){
			var api = app.API.create();
			api.authenticateWithAccount = this;
			return api;
		},
		prepareData: function(args){
			if (args.user){
				args.user = app.User.alloc(args.user);
			}
		},
	});
});
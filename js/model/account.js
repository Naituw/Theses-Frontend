define(['app','model/model','model/api'],function(app){
	app.Account = app.Model.extend({
		username: null,
		password: null,
		authToken: null,
		tokenWithPassword: function(psw){
			var username = this.get('username') || this.get('user.username');
			if (!username) return null;
			var sha = new jsSHA(psw, 'TEXT');
			var hash = sha.getHash('SHA-256','HEX');
			return 'Basic ' + $.base64.encode(username + ':' + hash);
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
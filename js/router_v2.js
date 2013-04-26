define(["app"],function(app){
	app.logout = function() {
		app.get('accountManager').signout();
		app.router.transitionTo('root.login.home');	
	};

	

});
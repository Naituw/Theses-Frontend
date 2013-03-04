/**
 * Theses.Router.js
 * Create by Wutian
 * 2012.11.02
 */
define(["app"],function(app){
	app.logout = function() {
		app.get('accountManager').signout();
		app.router.transitionTo('root.login.home');	
	};
	app.Route = Em.Route.extend({
		title: null,
		iconName: null,
		level: 10,
		maxLevel: 0,
		levels: null,
		active: false,
		sidebar: false,
		navitem: true,
		unread: 0,
		enter: function(router) {
			var needLevel = this.get('level');
			var account = app.get('accountManager').get('currentAccount');
			var currentUserLevel = 0;
			if (account){
				currentUserLevel = account.user.level;
			}
			if (!currentUserLevel){
				Em.run.later(app.logout,1);
			} else if (this.levels && $.inArray(currentUserLevel, this.levels) < 0) {
				router.transitionNext('root.main.index');
			} else if (currentUserLevel < needLevel) {
				router.transitionNext('root.main.index');
			} else if (this.maxLevel && currentUserLevel > this.maxLevel){
				router.transitionNext('root.main.index');
			} else {
				this.set('active',true);
				this.didEnter(router);
			}
		},
		didEnter: function() {},
		exit: function(router) {
			this.set('active',false);
			this.didExit(router);
		},
		didExit: function() {},
		current: function(){
			return (this === app.mainController.get('currentNavItem'));
		}.property('Theses.router.currentState'),
	});

	app.Router = Em.Router.extend({
		enableLogging: true,
		transitionNext: function(path){
			var that = this;
			Em.run.next(this,function(){
				that.transitionTo(path);
			});
		},
		root: app.Route.extend({
			navitem: false,
			main: app.Route.extend({
				route: '/',
				navitem: false,
				didEnter: function(router){
					app.applicationManager.run();
				},
				connectOutlets: function(router, context) {
			    	router.get('applicationController').connectOutlet('main');
			    	router.get('mainController').connectOutlet('navbar','navbar');
			    	router.get('mainController').connectOutlet('sidebar','sidebar');
			    	router.get('mainController').connectOutlet('panel','panel');
			    },
			    index: app.Route.extend({
			    	route: '/',
			    	didEnter: function(router){
						router.transitionNext('dashboard');
					},
			    }),
			    dashboard: app.Route.extend({
			    	title: '管理中心',
			  		route: '/dashboard',
			  		iconName: 'th-large',
			  		sidebar: true,
			  		connectOutlets: function(router, context) {
			  			router.get('mainController').connectOutlet('content','dashboard');
			  		},
			  	}),
			  	majors: app.Route.extend({
			  		title: '系和专业',
			  		route: '/majors',
			  		iconName: 'briefcase',
			  		sidebar: true,
			  		connectOutlets: function(router, context) {
			  			router.get('mainController').connectOutlet('content','majors');
			  		},
			  		level: 60,
			  	}),
			  	users: app.Route.extend({
			  		title: '用户管理',
			  		route: '/users',
			  		iconName: 'user',
			  		sidebar: true,
			  		level: 30,
			  		connectOutlets: function(router, context) {
			  			router.get('mainController').connectOutlet('content','users');
			  		},
			  	}),

				titleChosen: app.Route.extend({
			  		title: '选择论题',
			  		route: '/title_chosen',
			  		iconName: 'check',
			  		maxLevel: 10,
			  		sidebar: true,

			  		connectOutlets: function(router, context) {
			  			router.get('mainController').connectOutlet('content','titleChosen');
			  		},
			  	}),

			  	titlesAdmin: app.Route.extend({
			  		title: '论题管理',
			  		route: '/titles_admin',
			  		iconName: 'folder-open',
			  		sidebar: true,
			  		//redirectsTo: 'index',
			  		connectOutlets: function(router, context) {
			  			router.get('mainController').connectOutlet('content','titlesAdmin');
			  		},
			  		level: 60,
			  		maxLevel: 70,
			  	}),

			  	titlesMine: app.Route.extend({
			  		title: '我的论题',
			  		route: '/titles_mine',
			  		iconName: 'folder-open',
			  		sidebar: true,
			  		connectOutlets: function(router, context) {
			  			router.get('mainController').connectOutlet('content','titlesMine');
			  		},
			  		maxLevel: 40,
			  	}),

			  	titlesVerify: app.Route.extend({
			  		title: '论题审核',
			  		route: '/titles_verify',
			  		iconName: 'eye-open',
			  		sidebar: true,
			  		connectOutlets: function(router, context) {
			  			router.get('mainController').connectOutlet('content','titlesVerify');
			  		},
			  		level: 40,
			  		maxLevel: 70,
			  	}),
			}),
			login: app.Route.extend({
				route: '/login',
				navitem: false,
				home: app.Route.extend({
					route: '/',	
					navitem: false,
					enter: function(router) {
						if (app.get('accountManager').get('signed')){
							Em.run.later(function(){
								router.transitionTo('root.main.index');
							},1);
						}
					},
					connectOutlets: function(router, context) {
						router.get('applicationController').connectOutlet('login');
					}
				}),
			}),
		}),
	});
});

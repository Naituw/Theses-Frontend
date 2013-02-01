define(['app','text!template/m/users.hbs','views/views'],function(app,tpl){
	app.UsersView = Em.View.extend({
		template: Em.Handlebars.compile(tpl),
		didInsertElement: function(){
			var m = app.majorsManager;
			if (m.get('needsReload')){
				m.reloadDepartments();
			}
		},
		userClicked: function(e){
			var row = $(e.target).closest('tr.clickable');
			var i = row.parent().find('tr.clickable').index(row);
			this.get('controller').userClickAtIndex(i);
		},
	});
	app.UsersController = Em.Controller.extend({
		target: function(){
            return this;
        }.property(),
		selectedDeptID: null,
		departments: function(){
			var ds = Em.A();
			ds.pushObject(app.Department.alloc({
				deptid: 0,
				name: '全部系',
			}));
			ds.addObjects(app.majorsManager.get('departments'));
			return ds;
		}.property('Theses.majorsManager.departments.@each'),
		selectedMajorID: null,
		majors: function(){
			var ms = Em.A();
			ms.pushObject(app.Major.alloc({
				majorid: 0,
				name: '任意',
			}));
			var deptID = this.get('selectedDeptID');
			if (deptID){
				var d = app.majorsManager.departmentWithID(deptID);
				if (d){
					ms.addObjects(d.majors);
				}
			}
			return ms;
		}.property('Theses.majorsManager.departments.@each','selectedDeptID'),
		selectedLevel: 0,
		levels: function(){
			var ls = Em.A();
			ls.pushObject({name: '任意类型', level: 0});
			var a = app.accountManager.get('currentAccount');
			var cl = 0;
			if (a) {
				cl = a.user.level;
			}
			for (var name in app.Levels){
				var l = app.Levels[name];
				if (!l || l > cl) continue;
				ls.pushObject({
					name: app.NameForLevel(l),
					level: l,
				});
			}
			return ls;
		}.property('Theses.accountManager.currentAccount.user.level'),

		users: Em.A(),
		currentPage: 1,
		currentParam: null,
		loadingUsers: false,
		prevPageClass: function(){
			var c = 'btn ';
			if (this.currentPage <= 1 || this.loadingUsers) c += 'disabled';
			return c;
		}.property('currentPage','loadingUsers'),
		nextPageClass: function(){
			var c = 'btn ';
			if (!this.users.get('length') || this.loadingUsers) c += 'disabled';
			return c;
		}.property('currentPage','users.@each','loadingUsers'),
		query: function(){
			if (this.get('loadingUsers')) return;

			var cp = this.currentParam;
			if (!cp) return;
			var p = {};
			for(var key in cp)
        		p[key] = cp[key];

        	p.page = this.currentPage;

    		var a = app.accountManager.get('currentAccount');
			var that = this;
			if (a){
				that.set('loadingUsers',true);
				a.api().getUsers(p,function(data,error){
					that.set('loadingUsers',false);
					var users = that.get('users');
					users.clear();
					if (error){
						app.showError('查询失败',error.message);
					}else if (data) {
						for (var i = 0; i < data.length; i++) {
							var u = app.User.alloc(data[i]);
							users.pushObject(u);
						};
					}
				});
			}
		},
		search: function(){
			var d = this.get('selectedDeptID');
			var m = this.get('selectedMajorID');
			var l = this.get('selectedLevel');
			var param = {count:20,page:this.currentPage};
			if (d) param.deptid = d;
			if (m) param.majorid = m;
			if (l) param.level = l;

			this.set('currentParam',param);
			this.set('currentPage',1);

			this.query();
		},
		prevPage: function(){
			if (this.currentPage > 1 && !this.loadingUsers){
				this.set('currentPage',this.currentPage - 1);
				this.query();
			}
		},
		nextPage: function(){
			if (this.users.get('length') && !this.loadingUsers){
				this.set('currentPage',this.currentPage + 1);
				this.query();
			}
		},
		userClickAtIndex: function(i){
			var user = this.get('users')[i];
			app.get('panelController').openOutlet('userEdit','编辑用户','编辑用户信息', user);
		},

	/*
	 * Create User
	 */
	 	addUser: function(){
	 		app.get('panelController').openOutlet('userEdit','新增用户','填写账户信息',app.User.alloc({}));
	 	},
	 	canCreateUser: function(){
	 		var a = app.accountManager.get('currentAccount');
	 		var l = a.user.level;
	 		if (l >= app.Levels.superAdmin) return true;
	 		else if (l >= app.Levels.admin) {
	 			var d = a.user.get('departmentInfo');
	 			if (d && d.deptid) return true;
	 		}
	 		return false;
	 	}.property('Theses.accountManager.currentAccount.user.level','Theses.accountManager.currentAccount.user.departmentInfo'),
	});
});
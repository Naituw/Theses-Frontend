define(['app'],function(app){
	app.MajorsView = Em.View.extend({
		template: app.template('m/majors'),
		didInsertElement: function(){
			var m = app.majorsManager;
			if (m.get('needsReload')){
				m.reloadDepartments();
			}
		},
	});
	app.MajorsController = Em.Controller.extend({
		target: function(){
            return this;
        }.property(),
		currentDeptid: 0,
		reload: function(){
			app.majorsManager.reloadDepartments();
		},
		reloadButtonClass: function(){
			var c = "btn btn-mini ";
			if (app.majorsManager.get('loading')) c += "spin";
			return c;
		}.property('Theses.majorsManager.loading'),
		currentDept: function(){
			var id = this.get('currentDeptid');
			var d = app.majorsManager.departmentWithID(id);
			if (d){
				return d;
			}
			return null;
		}.property('currentDeptid'),
		newDeptName: null,
		canCreateDept: function(){
			var a = app.accountManager.get('currentAccount');
			if (a){
				if (a.user.level >= app.Levels.superAdmin) return true;
			}
			return false;
		}.property('Theses.accountManager.currentAccount.user.level'),
		addNewDept: function(){
			var n = this.get('newDeptName');
			if (n && n.length > 0){
				app.majorsManager.createDepartment();
				this.set('newDeptName',null);
			}else {
				app.showError('添加失败','请输入系的名称');
			}
		},
		newMajorName: null,
		canCreateMajor: function(){
			var a = app.accountManager.get('currentAccount');
			if (a){
				if (a.user.level >= app.Levels.superAdmin) return true;
				else if (a.user.department && a.user.department.deptid == this.get('currentDeptid')) return true;
			}
			return false;
		}.property('currentDeptid'),
		addNewMajor: function(){
			var n = this.get('newMajorName');
			if (n && n.length > 0){
				app.majorsManager.createMajor(this.get('currentDeptid'),n);
				this.set('newMajorName',null);
			}else {
				app.showError('添加失败','请输入专业的名称');
			}
		},
	});
});
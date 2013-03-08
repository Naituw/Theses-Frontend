define(['app','model/model'],function(app){
	app.MajorsManager = Em.Controller.extend({
		loading: false,
		postingMajor: false,
		postingDepartment: false,
		departments: Em.A(),
		needsReload: function(){
			return this.get('departments').get('length') == 0;
		}.property('departments.@each'),
		updateDepartments: function(data){
			var depts = this.get('departments');
			depts.clear();
			for (var i = 0; i < data.length; i++) {
				var raw = data[i];
				depts.pushObject(app.Department.alloc(raw));
			};
		},
		reloadDepartments: function(){
			if (this.get('loading')) return;
			var a = app.accountManager.get('currentAccount');
			if (a){
				var that = this;
				this.set('loading',true);
				a.api().getDepartments(null,function(data,error){
					if(!error){
						that.updateDepartments(data);
						that.set('loading',false);
					}
				});
			}
		},
		departmentWithID: function(id){
			var depts = this.get('departments');
			for (var i = depts.length - 1; i >= 0; i--) {
				var d = depts[i];
				if (d.deptid == id) return d;
			};
			return null;
		},
		marjorWithID: function(id){
			var depts = this.get('departments');
			for (var i = depts.length - 1; i >= 0; i--) {
				var d = depts[i];
				var ms = d.majors;
				for (var j = ms.length - 1; j >= 0; j--) {
					var m = ms[j];
					if (m.majorid == id) return m;
				};
			};
			return null;
		},
		createDepartment: function(name){
			if (this.get('postingDepartment')) return;
			var a = app.accountManager.get('currentAccount');
			if (a){
				var that = this;
				this.set('postingDepartment',true);
				a.api().createDepartment({
					name: name,
				},function(data,error){
					that.set('postingDepartment',false);
					if(!error){
						var d = app.Department.alloc(data);
						that.get('departments').pushObject(d);
					}else{
						app.showError('添加失败',error.message);
					}
				});
			}
		},
		createMajor: function(deptid, name){
			if (this.get('postingMajor')) return;
			var a = app.accountManager.get('currentAccount');
			if (a){
				var that = this;
				this.set('postingMajor',true);
				a.api().createMajor({
					deptid: deptid,
					name: name,
				},function(data,error){
					that.set('postingMajor',false);
					if(!error){
						var dept = that.departmentWithID(deptid);
						if(dept){
							dept.addMajorWithData(data);
						}
					}else{
						app.showError('添加失败',error.message);
					}
				});
			}
		},

		        // query
        departmentsForQuery: function(){

        }.property('Theses.majorsManager.departments','Theses.accountManager.currentAccount.user.level'),
        departmentsForUserCreation: function(){
            var a = app.accountManager.get('currentAccount');
            if (a){
            	var l = a.user.level;
            	if (l >= app.Levels.superAdmin){
            		return this.get('departments');
            	} else if (l >= app.Levels.admin){
            		var id = a.user.department.deptid;
            		if (id){
            			var r = Em.A();
            			r.pushObject(this.departmentWithID(id));
            			return r;
            		}
            	}
            }
            return null;
        }.property('Theses.majorsManager.departments','Theses.accountManager.currentAccount.user.level',
        	'Theses.accountManager.currentAccount.user.department.deptid'),

	});
	app.majorsManager = app.MajorsManager.create();
});
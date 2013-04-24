define(['app'],function(app){
	app.UserEditView = Em.View.extend({
		template: app.template('panel/user_edit'),
		foreachTextField: function(func){
			this.$().find('.theses-text-field').each(func);
		},
		dataValid: function(){
			var valid = true;
			this.foreachTextField(function(index,el){
				var view = Em.View.views[$(el).attr('id')];
				if (!view.get('isValid')){
					valid = false;
				}
			});
			return valid;
		},
		submit: function(){
			this.foreachTextField(function(index,el){
				var view = Em.View.views[$(el).attr('id')];
				view.focusOut();
			});

			var that = this;
			Em.run.later(function(){
				var valid = that.dataValid();
				if (valid){
					that.get('controller').createUser();
				}
			},100);
		},
	});
	app.UserEditController = Em.Controller.extend({
		// Validate
		validateFullname: function(value,next){
			if (!value || !value.length) next('error','不能为空');
			else next('success','');
		},
		validateEmail: function(value,next){
			app.validator.email(value,function(pass,desc){
				var code = pass ? "success" : "error";
				next(code, desc);
			});
		},

		// Datasource
		editmode: false,
		username: null,
		fullname: null,
		email: null,
		selectedGender: 0,
		selectedDepartment: 0,
		selectedMajor: 0,
		selectedUserType: 0,
		contentChange: function(){
			var c = this.get('content');
			this.set('editmode',(c.userid != 0));
			this.set('username',c.username);
			this.set('fullname',c.screenname);
			this.set('email',c.email);
			this.set('selectedGender',c.gender + '');
			this.set('selectedUserType',c.level);
			var d = c.get('departmentInfo');
			if (d) this.set('selectedDepartment',d.deptid);
			var m = c.get('majorInfo');
			if (m) this.set('selectedMajor',m.majorid);
		}.observes('content'),
		needSelectMajor: function(){
			var t = this.get('selectedUserType');
			if (t == app.Levels.student) return true;
			return false;
		}.property('selectedUserType'),
		levels: function(){
			var ls = Em.A();
			var a = app.accountManager.get('currentAccount');
			var cl = 0;
			if (a) {
				cl = a.user.level;
			}
			for (var name in app.Levels){
				var l = app.Levels[name];
				if (!l || l >= cl) continue;
				ls.pushObject({
					name: app.NameForLevel(l),
					level: l,
				});
			}
			return ls;
		}.property('Theses.accountManager.currentAccount.user.level'),
		majors: function(){
			var ms = Em.A();
			var deptID = this.get('selectedDepartment');
			if (deptID){
				var d = app.majorsManager.departmentWithID(deptID);
				if (d){
					ms.addObjects(d.majors);
				}
			}
			return ms;
		}.property('Theses.majorsManager.departments.@each','selectedDepartment'),
		createUser: function(){
			var a = app.accountManager.get('currentAccount');
			if (a){
				var p = {
					'username':this.get('username'),
					'deptid':this.get('selectedDepartment'),
					'level':this.get('selectedUserType'),
					'email':this.get('email'),
					'screenname':this.get('fullname'),
				};
				if (this.get('needSelectMajor')){
					p.majorid = this.get('selectedMajor');
				}
				a.api().createUser(p,function(data,error){
					if (error){
						app.showError('创建失败',error.message);
					}else {
						app.showSuccess('创建成功','用户 ' + p.username + ' 已成功创建');
					}
				});
			}
		},
	});
});
define(['app','text!template/m/titles_show.hbs'],function(app,tpl){
	app.TitlesShowView = Em.View.extend({
		template: Em.Handlebars.compile(tpl),
		uploadButtonPressed: function(){
			var that = this;
			var input = this.$().find('#upload-document-input');
            input.click();
            input.unbind('change');
            input.change(function(){
                var file = this.files[0];
                var api = app.currentAPI();
                if (file && api) {
                    api.uploadDocument(that.get('controller.content.titleid'),file,function(data, error){
                    	if(!error){
                    		var a = app.Document.alloc(data);
                    		that.get('controller').documentUploaded(a);
                    	}
                    });
                }
            });
		},
	});
	app.TitlesShowController = Em.ObjectController.extend({
		target: function(){
            return this;
        }.property(),
		avaliableMajors: function(){
			var ms = this.content.available_major;
			if (Object.prototype.toString.call(ms) != '[object Array]') return '';
			var results = Em.A();
			for (var i = ms.length - 1; i >= 0; i--) {
				var id = ms[i];
				var m = app.majorsManager.marjorWithID(id);
				if (m){
					results.pushObject(m.name);
				}
			};
			return results.join(' , ');
		}.property('content','Theses.majorsManager.departments.@each'),
		teacherName: function(){
			if (this.content.teacher_name) return this.content.teacher_name;
			return this.content.teacherid;
		}.property('content.teacher_name','content.teacherid'),

		canAdmin: function(){
			var a = app.accountManager.get('currentAccount');
			if (!a) return false;
			var u = a.user;
			if (u.level < 60 || u.level >= 80) return false;
			if (u.deptid && u.deptid == this.get('content').deptid) return true;
			return false;
		}.property('Theses.accountManager.currentAccount.user.level',
			'Theses.accountManager.currentAccount.user.deptid','content.deptid'),
		canViewExtraInfo: function(){
			if (this.get('canAdmin')) return true;
			var c = this.get('content');
			var u = Theses.get('accountManager.currentAccount.user');
			if (!u) return false;
			if (u.userid == c.teacherid) return true;

		}.property('canAdmin','content','Theses.accountManager.currentAccount.user.userid'),

		teacher: null,
		students: Em.A(),
		loadingUsers: false,
		reloadUsers: function(ignoreError){
			if (this.loadingUsers) return;
			if (!this.content.titleid) return;
			var api = app.currentAPI();
			if (api){
				this.set('loadingUsers',true);
				var that = this;
				api.getTitleRelatedUsers(this.content.titleid,function(data, error){
					that.set('loadingUsers',false);
					if (error){
						if (!ignoreError) app.showError('获取相关用户失败',error.message);
					}else {
						var t = data.teacher;
						var s = data.student;
						var sels = data.selections;
						var students = that.students;
						students.clear();

						if (t) that.set('teacher',app.User.alloc(t));

						var selections = {};
						if (sels && sels.length){
							for (var i = sels.length - 1; i >= 0; i--) {
								var raw = sels[i];
								var sel = app.Selection.alloc(raw);
								var sid = sel.studentid;
								if (sid) selections[sid] = sel;
							};
						}

						if (s && s.length){
							for (var i = 0; i < s.length; i++) {
								var raw = s[i];
								var user = app.User.alloc(raw);
								var stu = app.UserSelection.create();
								stu.set('user',user);

								var sel = selections[2];//selections[user.userid];
								if (sel) stu.set('selection',sel);

								students.pushObject(stu);
							};
						}
					}
				});
			}
		},
		refreshUsers: function(ignoreError){
			this.reloadUsers(false);
		},
		isCurrentUserOwnerTeacher: function(){
			var cid = app.get('accountManager.currentAccount.user.userid');
			var tid = this.get('content.teacherid');
			if (cid != tid) return false;
			return true;
		}.property('Theses.accountManager.currentAccount.user.userid','content.teacherid'),
		showsReviewTip: function(){
			if (!this.get('isCurrentUserOwnerTeacher')) return false;
			return app.get('milestoneManager.isTitleReviewTime');
		}.property('isCurrentUserOwnerTeacher','Theses.milestoneManager.isTitleReviewTime'),
		studentWithUserID: function(userid){
			for (var i = this.students.length - 1; i >= 0; i--) {
				var student = this.students[i];
				if (student.user.userid == userid) return student;
			};
			return null;
		},
		studentClicked: function(user, selection, controller){
			if (!controller.get('isCurrentUserOwnerTeacher')) return;
			var stu = controller.studentWithUserID(user.userid);
			if (!stu.selection){
				var sel = app.Selection.create();
				sel.selectionid = 0;
				sel.studentid = stu.user.userid;
				sel.titleid = controller.content.titleid;
				stu.selection = sel;
			}
			app.get('panelController').openOutlet('titleMark','论题打分','对 ' + user.username + ' 的 ' + controller.content.title, stu);
		},
		_ignoreChange: false,


		documents: Em.A(),
		currentDocPage: 1,
		loadingDocuments: false,
		hasMoreDocuments: function(){
			return this.get('documents.length') > 0;
		}.property('documents.length'),
		loadDocuments: function(){
			if (this.loadingDocuments) return;
			if (!this.content.titleid) return;
			var api = app.currentAPI();
			if (api){
				this.set('loadingDocuments',true);
				var that = this;
				api.getDocumentList(this.content.titleid, this.currentDocPage, function(data,error){
					that.set('loadingDocuments',false);
					if (error){
						app.showError('文档加载失败',error.message);
					}else {
						var d = that.documents;
						d.clear();

						for (var i = 0; i < data.length; i++) {
							d.pushObject(app.Document.alloc(data[i]));
						};
					}
				});
			}
		},

		refreshDocuments: function(){
			this.set('currentDocPage',1);
			this.loadDocuments();
		},
		documentPageChanged: function(){
			this.loadDocuments();
		}.observes('currentDocPage'),
		documentDidDelete: function(doc){
			this.documents.removeObject(doc);
		},
		documentUploaded: function(doc){
			this.documents.insertAt(0,doc);
		},



		reset: function(){
			this.set('teacher',null);
			this.students.clear();
			this.set('loadingUsers',false);

			this.documents.clear();
			this.set('currentDocPage',1);
			this.set('loadingDocuments',false);

			this.reloadUsers(true);
		}.observes('content.titleid'),

		canUploadDocument: function(){
			var uid = app.get('accountManager.currentAccount.user.userid');
			for (var i = this.students.length - 1; i >= 0; i--) {
				var u = this.students[i];
				if (u.userid == uid) return true;
			};
			return false;
		}.property('Theses.accountManager.currentAccount.user.userid','students.@each'),
	});
});
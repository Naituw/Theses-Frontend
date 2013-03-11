define(['app','text!template/m/titles_show.hbs'],function(app,tpl){
	app.TitlesShowView = Em.View.extend({
		template: Em.Handlebars.compile(tpl),
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
		refreshUsers: function(){
			if (this.loadingUsers) return;
			if (!this.content.titleid) return;
			var api = app.currentAPI();
			if (api){
				this.set('loadingUsers',true);
				var that = this;
				api.getTitleRelatedUsers(this.content.titleid,function(data, error){
					that.set('loadingUsers',false);
					if (error){
						app.showError('获取相关用户失败',error.message);
					}else {
						var t = data.teacher;
						var s = data.student;
						var students = that.students;

						if (t) that.set('teacher',app.User.alloc(t));
						if (s && s.length){
							for (var i = 0; i < s.length; i++) {
								var raw = s[i];
								students.pushObject(app.User.alloc(raw));
							};
						}
					}
				});
			}
		},

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



		reset: function(){
			this.set('teacher',null);
			this.students.clear();
			this.set('loadingUsers',false);

			this.documents.clear();
			this.set('currentDocPage',1);
			this.set('loadingDocuments',false);

		}.observes('content.titleid'),
	});
});
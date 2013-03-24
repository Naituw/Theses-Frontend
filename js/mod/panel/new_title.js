define(['app','text!template/panel/new_title.hbs'],function(app,tpl){
	app.NewTitleView = Em.View.extend({
		template: Em.Handlebars.compile(tpl),
		didInsertElement: function(){
			var isMobile = navigator.userAgent.match(/(iPhone|iPod|iPad|Android|BlackBerry|webOS|IEMobile)/);
			if(!isMobile) {
 				$('select[multiple="multiple"]').tooltip({title:"按住Ctrl键来选择多个项目, 按下Ctrl+A来全选"});
			}

			var controller = this.get('controller');
			if (controller && controller.viewDidLoad) controller.viewDidLoad();
		},
	});
	app.NewTitleController = Em.Controller.extend({
		target: function(){
			return this;
		}.property(),

		title: "",
		student_num: 1,
		majors: Em.A(),
		description: "",
		requirements: "",

		available_majors: function(){
			var department = app.accountManager.get('currentAccount.user.departmentInfo');
			if (department){
				return department.majors;
			}
			return [];
		}.property('Theses.accountManager.currentAccount.user.departmentInfo'),

		available_student_nums: [1,2,3,4],

		validate: function(){
			if (!this.title || !this.title.length){
				return '论文标题不能为空';
			}
			if (this.title.length > 30){
				return '论文标题过长';
			}
			if (this.title.length < 5){
				return '论文标题过短';
			}
			if (!this.description || !this.description.length){
				return '论文描述不能为空';
			}
			if (this.description.length > 200){
				return '论文描述过长';
			}

			return null;
		},
		submit: function(){
			var api = app.currentAPI();
			var error = this.validate();
			if (error) {
				app.showError('提交失败',error);
			}
			else if (api) {
				var title = this.title;

				var majors = this.get('majors');
				var majorIDs = Em.A();

				for (var i = majors.length - 1; i >= 0; i--) {
					var m = majors[i];
					majorIDs.pushObject(m.get('majorid'));
				};

				api.createTitle({
					"title" : title,
					"student_num": this.student_num,
					"description": this.description,
					"require_info": this.requirements,
					"available_majors": majorIDs.join(','),
				},function(data,error){
					if (error){
						app.showError('创建论题失败',error.message);
					} else {
						app.showSuccess('创建论题成功',title);
					}
				});

				app.panelController.closePanel();
			};
		},

		viewDidLoad: function(){
			this.set('title','');
			this.set('student_num',1);
			this.set('description','');
			this.set('requirements','');

			this.majors.clear();
			this.majors.pushObjects(this.get('available_majors'));
		},
	});
});
define(['app'],function(app){
	app.TeacherCell = Em.View.extend({
		classNames: ['row-fluid','teacher-cell'],
		template: app.template('views/teachercell'),
		teacher: null,
		pendingState: false,
		isSenior: function(){
			return (this.teacher && this.teacher.level == 40);
		}.property('teacher.level'),
		buttonClass: function(){
			if (this.get('isSenior')) return 'btn-danger';
			return '';
		}.property('isSenior'),
		buttonTitle: function(){
			if (this.get('isSenior')) return '取消资格';
			return '授予资格';
		}.property('isSenior'),
		buttonClicked: function(){
			if (!this.get('teacher')) return;
			var tid = this.get('teacher').get('userid');
			var isSenior = this.get('isSenior');
			var api = app.currentAPI();
			if (api){
				var self = this;
				self.set('pendingState',true);
				var callback = function(data,error){
					self.set('pendingState',false);
					if(error){
						app.showError('提交失败',error.message);
					}else if (data.length > 0) {
						self.set('teacher',app.User.alloc(data[0]));
					}
				};

				if (isSenior) api.levelDownTeacher(tid,callback);
				else api.levelUpTeacher(tid,callback);
			}
		},
	});
});
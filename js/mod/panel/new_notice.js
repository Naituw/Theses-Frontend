define(['app','text!template/panel/new_notice.hbs'],function(app,tpl){
	app.NewNoticeView = Em.View.extend({
		template: Em.Handlebars.compile(tpl),
		didInsertElement: function(){
			var controller = this.get('controller');
			if (controller && controller.viewDidLoad) controller.viewDidLoad();
		},
	});
	app.NewNoticeController = Em.Controller.extend({
		target: function(){
			return this;
		}.property(),

		title: '',
		url: '',
		content: '',
		sendEmail: false,

		viewDidLoad: function(){
			this.set('title','');
			this.set('url','');
			this.set('content','');
			this.set('sendEmail',false);
		},

		showsContentArea: function(){
			return this.get('url').length == 0;
		}.property('url'),

		submit: function(){
			var title = this.get('title'),
				url = this.get('url'),
				content = this.get('content'),
				sendEmail = this.get('sendEmail');

			var error = null;

			if (!title) error = '请输入标题';
			else if (title.length > 60) error = '标题应少于30字';
			else if (!url){
				if (!content) error = '请输入内容或跳转链接';
			} else {
				var regex = new RegExp("^(http[s]?:\\/\\/(www\\.)?|ftp:\\/\\/(www\\.)?|www\\.){1}([0-9A-Za-z-\\.@:%_\+~#=]+)+((\\.[a-zA-Z]{2,3})+)(/(.)*)?(\\?(.)*)?");
				if (!regex.test(url)) error = '请输入有效的跳转链接';
			}

			if (error){
				app.showError('发布失败',error);
				return;
			}

			var api = app.currentAPI();

			if (!api) return;

			var params = {
				title: title,
				send_email: sendEmail ? 1 : 0,
			}

			if (url) params.url = url;
			else params.content = content;

			api.createNotification(params, function(data,error){
				if (error){
					app.showError('发布通知失败',error.message);
				} else {
					app.showSuccess('通知发布成功');
				}
			});

			app.panelController.closePanel();
		},
	});
});
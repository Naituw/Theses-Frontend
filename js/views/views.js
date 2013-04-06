define(['app','views/tableview','views/teachercell'],function(app){
	app.Focusable = Em.Mixin.create({
		focused: false,
		focusIn: function(e){
			this.set('focused',true);
		},
		focusOut: function(e){
			this.set('focused',false);
		},
	});

	app.AsyncValidation = Em.Mixin.create({
		required: true,
		valid: function(){
			console.log(this.get('controller'));
			if (this.get('focused')){
				this.set('code','');
				this.set('message','');
			} else{
				var v = this.get('value');
				var that = this;
				var value = this.get('value');
				var validate = this.validate;
				if (this.validateDelegate){
					validate = this.get('controller')[this.validateDelegate];
				}
				if ((!value || !value.length) && !this.get('required')){

				}
				else
				{
					validate(value, function(code, message){
						if (value == that.get('value') && !that.get('focused')){
							that.set('code',code);
							that.set('message',message);
						}
					});
				}
			}
		}.observes('focused'),
		validate: function(value, next){
			next('','');
		},
		validateDelegate: null,
	});

	app.TextField = Ember.View.extend(app.Focusable, app.AsyncValidation, {
		classNames: ['control-group','theses-text-field'],
		inputClassNames: ['span12'],
		type: 'text',
		value: "",
		title: null,
		placeholder: "",
		code: '',
		classNameBindings: ['code'],
		message: "",
		hasMessage: function(){
			var m = this.get('message');
			return (m && m.length);
		}.property('message'),
		isValid: function(){
			if (this.get('code') == 'success') {
				return true;
			} else if (!this.get('required') && (!this.get('value') || !this.get('value').length)) {
				return true;
			} else if (!this.get('code').length){
				this.valid();
				return false;
			}
			return false;
		}.property('code'),
		template: Em.Handlebars.compile('{{#if view.title}}<label class="control-label">{{view.title}}</label>{{/if}}<div class="controls">{{view Ember.TextField placeholderBinding="view.placeholder" valueBinding="view.value" typeBinding="view.type" classNameBindings="view.inputClassNames"}} {{#if view.hasMessage}}<span class="help-inline">{{view.message}}</span>{{/if}}</div>'),
	});

	app.Select = Em.Select.extend({
		classNames: ['span12'],
	});

	app.UsernameField = app.TextField.extend({
		placeholder: 'Username',
		title: '用户名',
		inputClassNames: ['span12'],
		validate: function(value,next){
			app.validator.username(value,function(pass,desc){
				var code = pass ? "success" : "error";
				next(code, desc);
			});
		},
	});

	app.LoadingView = Em.View.extend({
		template: Em.Handlebars.compile('<section class="loading-section"><div class="loading-view"></div></section>'),
	});
	app.PromptView = Em.View.extend({
		text: '',
		template: Em.Handlebars.compile('<section class="prompt-section">{{view.text}}</section>'),
	});

	app.PagingView = Em.View.extend({
		page: 1,
		hasNext: false,
		hasPrevious: function(){
			return this.get('page') > 1;
		}.property('page'),
		template: Em.Handlebars.compile('<div class="search-fields paging page-controls"> \
			<a {{bindAttr class=":btn view.hasPrevious::disabled"}} {{action prevPage href=true target="view"}}>上一页</a> \
					第 {{view.page}} 页 \
					<a {{bindAttr class=":btn view.hasNext::disabled"}} {{action nextPage href=true target="view"}}>下一页</a> \
				</div>'),
		prevPage: function(){
			if (this.get('hasPrevious')){
				this.set('page',this.get('page') - 1);
			}
		},
		nextPage: function(){
			if (this.get('hasNext')){
				this.set('page',this.get('page') + 1)
			}
		},
	});

	app.WrongTimeView = Em.View.extend({
		name: "",
		template: Em.Handlebars.compile('<div class="wrong-time-wrapper"><p class="wrong-time-description">\
			<strong>现在不是{{view.name}}时间</strong><br>请前往<a href="/#/dashboard">管理中心</a>查看时间安排\
			</p></div>'),
	});

	app.TitleCell = Em.View.extend({
		classNames: ['row-fluid','title-cell'],
		title: null,
		template: Em.Handlebars.compile('<div class="span12">\
			{{#with view.title}}<h4>{{title}}{{title}}</h4><span {{bindAttr class="view.stateClass"}}>{{stateName}}</span>{{/with}}</div>'),
		click: function(){
			app.router.transitionTo('titlesShow',this.title);
		},
		stateClass: function(){
			var s = this.get('title.state');
			if (s < 33) return 'text-error';
			else if (s < 68) return 'text-warning';
			else return 'text-success';
		}.property('title.state'),
	});

	app.UserCell = Em.View.extend({
		classNames: ['user-cell'],
		user: null,
		lineOne: function(){
			var u = this.user;
			if (!u) return '';
			var result = u.username;
			if (u.screenname && u.screenname.length) 
				result += ('（' + u.screenname + '）');
			result += ('，' + u.get('levelType'));
			return result;
		}.property('user','user.screenname'),
		lineTwo: function(){
			var u = this.user;
			if (!u) return '';
			var result = [];
			var major = u.get('majorInfo');
			var dept = u.get('departmentInfo');
			if (major) result.pushObject(major.name);
			if (dept) result.pushObject(dept.name);
			return result.join('，');
		}.property('user','user.departmentInfo','user.majorInfo'),
		template: Em.Handlebars.compile('<img {{bindAttr src="view.user.avatarThumbURL"}} class="pull-left"/>\
							<div class="user-info">\
								<label>{{view.lineOne}}</label>\
								<label>{{view.lineTwo}}</label>\
							</div>'),
	});

	app.DocumentCell = Em.View.extend({
		classNames: ['document-cell'],
		doc: null,
		lineTwo: function(){
			var u = this.get('doc.author');
			var r = '';
			if (u && u.username) r += u.username;
			if (u && u.screenname) r += (' (' + u.screenname + ') ');
			if (this.doc && this.doc.create_at) {
				var d = new Date(this.doc.create_at);
				r += ('上传于 ' + d.format('yyyy年MM月dd日 hh:mm'));
			}
			return r;
		}.property('doc.create_at','doc.author'),
		canDelete: function(){
			var user = app.get('accountManager.currentAccount.user');
			var l = user.level;
			if (l >= 60 && l <= 70) return true;
			var cid = user.userid;
			if (cid && cid == this.get('doc.author.userid')) return true;
			return false;
		}.property('Theses.accountManager.currentAccount.user.userid','doc.author.userid'),
		fileType: function(){
			var t = this.get('doc.fileType');
			return 'filetype-' + t;
		}.property('doc.fileType'),

		pendingDelete: false,
		delete: function(){
			if(this.get('pendingDelete')) return;
			var that = this;
			if (!that.doc || !that.doc.docid) return;
			app.confirmationManager.addRequest('确定要删除文档吗？','删除后的文档将不能再恢复',function(){
				var api = app.currentAPI();
				if (api){
					that.set('pendingDelete',true);
					api.deleteDocument(that.doc.docid, function(data,error){
						that.set('pendingDelete',false);
						if (error){
							app.showError('删除文档失败',error.message);
						}else if(that.get('controller')) {
							var c = that.get('controller');
							if (c.documentDidDelete){
								c.documentDidDelete(that.doc);
							}
						}
					})
				}
			});
		},
		pendingDownload: false,
		click: function(e){
			if (e.target.className == 'close') return;
			if (this.get('pendingDownload')) return;
			var that = this;
			var api = app.currentAPI();
			if (api){
				this.set('pendingDownload',true);
				var baseURL = api.get('_apiRoot');
				api.downloadDocument(this.get('doc.docid'),function(data,error){
					that.set('pendingDownload',false);
					if (error){
						app.showError('文档下载失败',error.message);
					}else {
						var url = data.url;
						if (url) window.location.href = url;
					}
				})
			}
		},

		template: Em.Handlebars.compile('\
			{{#if view.pendingDelete}}{{view Theses.LoadingView}}{{else}}\
					<div class="filetype pull-left">\
						<div {{bindAttr class="view.fileType"}}></div>\
					</div>\
					<div class="document-info">\
						<h4>{{view.doc.displayName}}</h4>\
						<span>{{view.lineTwo}}</span>\
					</div>\
					{{#if view.canDelete}}\
						<button class="close" {{action delete target="view" bubbles=false}}>&times;</button>\
					{{/if}}{{/if}}'),
	});

	app.DropdownItems = Em.Object.extend({
		title: null,
		enabled: true,
		callback: function(){},
	});
	app.DropdownButton = Em.View.extend({
		template: Em.Handlebars.compile('<div class="btn-group"> \
			<button class="btn dropdown-toggle" data-toggle="dropdown">\
				{{view.title}} \
				<span class="caret"></span>\
			</button> \
			<ul class="dropdown-menu"> \
				{{#each view.items}}\
					<li><a>{{title}}</a></li>\
				{{/each}}\
			</ul> </div>'),
		title: null,
		items: Em.A(),

		itemAtIndexPressed: function(index){
			if (index >= this.items.get('length') || index < 0) return;
			var item = this.items[index];
			if (item.callback) item.callback();
		},

		didInsertElement: function(){
			var self = this;
			this.$().delegate('.dropdown-menu li','click',function(){
				var index = $(this).parent().find('li').index($(this));
				self.itemAtIndexPressed(index);
			});
			app.dbdb = this;
		},
		willDestroyElement: function(){
			this.$().undelegate('.dropdown-menu li','click');
		},
	});
});
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
});
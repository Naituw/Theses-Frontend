/**
 * Theses.App.js
 * Create by Wutian
 * 2012.11.02
 */

define(["jquery","plugins","handlebars", "ember", "bootstrap","vendor/theses.ui"],function(v){
	Theses = Ember.Application.create({
		VERSION: '1.0',
		rootElement: '#theses-app',
		storeNamespace: 'theses-emberjs',
		autoinit: false,
		apiRoot: 'https://lwapi.sinaapp.com/',
		loadingView: $('#loading'),
		loadingCount: 0,
		enableLog: true,
		startLoading: function(){
			this.loadingCount++;
			if (this.loadingCount > 0) {
				this.loadingView.show();
			};
		},
		stopLoading: function(){
			this.loadingCount--;
			if (this.loadingCount <= 0) {
				this.loadingCount = 0;
				this.loadingView.hide();
			}
		},
		currentTime: 0,
		_heartbeats: Em.A(),
		addHeartBeat: function(func){
			this._heartbeats.pushObject(func);
		},
	});

	Theses.deferReadiness();

	(function(app){
		for (var i = Theses._heartbeats.length - 1; i >= 0; i--) {
			var func = Theses._heartbeats[i];
			func();
		};
		setTimeout(arguments.callee, 3 * 60 * 1000);
	})(Theses);

	(function(app){
		var time = (new Date()).getTime();
		Theses.set('currentTime',time);
		setTimeout(arguments.callee, 10 * 1000);
	})(Theses);


	Theses.startModal = function(){
		$('body').addClass('modal-enabled');
	}
	Theses.endModal = function(){
		$('body').removeClass('modal-enabled');
	}

	Theses.processTemplate = function(name, tpl){
		if (!Em.Handlebars.compile) {
			console.warning('Current using handlebars.runtime, Should not use this function');
			return;
		}
		Ember.TEMPLATES[name] = Em.Handlebars.compile(tpl);
	};
	Theses.template = function(name){
		var result = Ember.TEMPLATES[name];
		if (!result) result = Ember.TEMPLATES[name + '.hbs'];
		var lastName = name.split('/').slice(-1)[0];
		if (!result) result = Ember.TEMPLATES[lastName];
		if (!result) result = Ember.TEMPLATES[lastName + '.hbs'];
		return result;
	};

	Handlebars.registerHelper('icon', function(property, options) {
	    var value = Ember.Handlebars.get(this, property, options);
	    return new Handlebars.SafeString('<i class="icon icon-'+value+'"></i>');
	});

	return Theses;
});
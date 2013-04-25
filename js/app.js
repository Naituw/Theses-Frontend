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

	Theses.showAlert = function(title,desc,type){
		var type = type || 'warning';

		var alertView = Theses.AlertView.create({
			title: title,
			description: desc,
		});

		alertView.appendTo('#app-alerts');

		Em.run.next(function(){
			var innerView = alertView.$('section');

			innerView.addClass('alert-'+type).animate({top:'0',opacity:1},400,function(){
				Em.run.later(function(){
					innerView.animate({top:'-120px',opacity:0},400,function(){
						alertView.remove();
					});
				},2000);
			});
		});
	}
	Theses.showError = function(title,desc){
		Theses.showAlert(title,desc,'error');
	}
	Theses.showSuccess = function(title,desc){
		Theses.showAlert(title,desc,'success');
	}
	Theses.showWarning = function(title,desc){
		Theses.showAlert(title,desc,'warning');
	}

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
		return Ember.TEMPLATES[name];
	};

	Handlebars.registerHelper('icon', function(property, options) {
	    var value = Ember.Handlebars.get(this, property, options);
	    return new Handlebars.SafeString('<i class="icon icon-'+value+'"></i>');
	});

	// Alert View .
	Theses.AlertView = Em.View.extend({
		template: Theses.template('alert'),
	});

	return Theses;
});
/**
 * Theses.App.js
 * Create by Wutian
 * 2012.11.02
 */

define(["jquery",'text!template/alert.hbs',"plugins","handlebars", "ember", "bootstrap","vendor/theses.ui"],function(v,alertTpl){
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

	// Alert View .
	Theses.AlertView = Em.View.extend({
		template: Em.Handlebars.compile(alertTpl),
	});
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

	Handlebars.registerHelper('icon', function(property, options) {
	    var value = Ember.Handlebars.get(this, property, options);
	    return new Handlebars.SafeString('<i class="icon icon-'+value+'"></i>');
	});

	return Theses;
});
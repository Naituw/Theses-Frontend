define(['app'],function(app){
	app.ConfirmRequest = Em.Object.extend({
		title: null,
		description: null,
		onConfirm: null,
	});
	app.ConfirmationManager = Em.Object.extend({
		requestQueue: Em.A(),
		hasRequest: function(){
			return (this.get('requestQueue.length') > 0);
		}.property('requestQueue.length'),
		currentRequest: function(){
			if (!this.get('hasRequest')) return null;
			return this.requestQueue[0];
		}.property('requestQueue.length'),

		cancelCurrentRequest: function(){
			var r = this.get('currentRequest');
			if (r) this.requestQueue.removeObject(r);
		},
		confirmCurrentRequest: function(){
			var r = this.get('currentRequest');
			if (r) {
				if (r.onConfirm) r.onConfirm();
				this.requestQueue.removeObject(r);
			}
		},
		addRequest: function(title, description, callback){
			var r = app.ConfirmRequest.create({
				title: title,
				description: description,
				onConfirm: callback,
			});
			this.requestQueue.pushObject(r);
		},
	});
	app.confirmationManager = app.ConfirmationManager.create();
});
define(['app'],function(app){
	app.UploadTask = Em.Object.extend({
		xhr: null,
		url: null,
		file: null,
		params: null,
		api: null,
		desc: null,
		callback: null,
		currentProgress: null,
		cancel: function(){
			if (this.xhr) this.xhr.abort();
		},
		start: function(){
			var x = this.api.request(this.url, "POST", this.params, this.callback, this.file);
			this.xhr = x;

			var that = this;
			this.xhr.progressChanged = function(p){
				that.set('currentProgress',p);
			}
		},
	});
	app.UploadManager = Em.Object.extend({
		tasks: Em.A(),
		taskFinished: function(task, error){
			if (error){
				if (!error.aborted){ // 判断是否为用户取消
					app.showError(task.desc, '文件上传失败: ' + error.message);
				}
			}else {
				app.showSuccess(task.desc, '文件上传成功');
			}
			this.tasks.removeObject(task);
		},
		addTask: function(url, file, parameters, apiObject, desc, _callback){
			if (!url || !file || !parameters || !apiObject){
				console.error('url, file, param, apiObject must not be null');
			}
			var that = this;
			var r = app.UploadTask.create({
				url: url,
				file: file,
				params: parameters,
				api: apiObject,
				desc: desc,
				callback: function(data, error){
					that.taskFinished(r, error);
					if (_callback){
						_callback(data,error);
					}
				},
			});
			r.start();
			this.tasks.pushObject(r);
		},
		cancelTask: function(task){
			if (!task) return;
			task.cancel();
			this.tasks.removeObject(task);
		},
	});
	app.uploadManager = app.UploadManager.create();
});
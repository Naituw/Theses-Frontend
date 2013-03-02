define(['app'],function(app){
	app.API = Em.Object.extend({
		authenticateWithAccount: null,
		apiRoot: null,
		_apiRoot: function(){
			if (this.apiRoot) return this.apiRoot;
			if (this.authenticateWithAccount) return this.authenticateWithAccount.apiRoot;
			return null;
		}.property(),
		authHeader: function(){
			var account = this.authenticateWithAccount;
			if (!account) return null;
			if (!account.authToken && account.username && account.password){
				var authString = account.username+':'+account.password;
				account.authToken = 'Basic ' + $.base64.encode(authString);
			}
			return account.authToken;
		},
		request: function(path, method, parameters, callback, file){
			if (!this.authenticateWithAccount) return;
			var url = this.get("_apiRoot") + path;

			app.startLoading();

			var successCallback = function(data, textStatus, jqXHR){
				if (callback) {
					if (data) {
						if (data.code != 200) callback(null, data);
						else callback(data.object, null);
					}
					else {
						callback(null, {});
					}
				}
			};

			var errorCallback = function(jqXHR,textStatus,errorThrown){
				var data = jqXHR.responseText;
				try{
					if (data) data = JSON.parse(data);
    			}catch(e){
        			data = {code:500,message:"服务器内部错误"};
    			}
				data.errorThrown = errorThrown;
				if (!data) data = {};
				if (callback) callback(null, data);
			};

			var completeCallback = function(jqXHR, textStatus){
				app.stopLoading();
			};

			var headers = {
				'Auth': this.authHeader(),
			};

			if (file) {
				var data = new FormData();
				data.append('upload',file);
				for(var key in parameters){
					var value = parameters[key];
					data.append(key,value);
				}
				$.ajax(url, {
    				type: method,
    				dataType: 'json',
    				success: successCallback,
    				error: errorCallback,
    				complete: completeCallback,
    				headers: headers,
    				processData: false,
    				contentType: false,
    				data: data,
  				});
			} else {

				$.ajax(url,{
					type: method,
					dataType: 'json',
					data: parameters,
					headers: headers,
					success: successCallback,
					error: errorCallback,
					complete: completeCallback,
				});
			}
		},
		GET: function(path,paramaters,callback){
			this.request(path, "GET", paramaters, callback);
		},
		POST: function(path,parameters,callback){
			this.request(path, "POST", parameters, callback);
		},
		upload: function(path, file, parameters, callback, maxSize, fileTypes){
			if (!file) return;
			var error = null;
			if (file.size > maxSize) {
				var maxString = (maxSize / 1000000) + 'MB';
				error = '文件不能超过 ' + maxString;
			}

			if (fileTypes){
				var ext = file.name.split('.').pop().toLowerCase();
				if($.inArray(ext, fileTypes) == -1) {
    				error = '支持的文件类型：' + fileTypes.join(', ') + '。';
				}
			}		

			if(error){
				app.showError('上传失败',error);
			}
			else{
				this.request(path, "POST", parameters, callback, file);
			}
		},
		verifyCredentials: function(callback){
			this.GET('account/verify_credentials.json',null,callback);
		},
		reloadProfile: function(callback){
			this.GET('account/verify_credentials.json',null,callback);
		},
		updateProfile: function(params,callback){
			this.POST('account/update_profile.json',params,callback);
		},
		updatePassword: function(oldpsw, newpsw, callback){
			var account = this.get('authenticateWithAccount');
			if (!account) return;

			var params = {};
            params.old_password = $.base64.encode(oldpsw);
            params.password = account.tokenWithPassword(newpsw);

            this.POST('account/set_password.json',params,callback); 
		},
		updateAvatar: function(file,callback){
			this.upload('account/update_avatar.json',file,null,callback, 2 * 1024 * 1024, ['jpg','png','gif']);
		},
		getTimes: function(callback){
			this.GET('theses/times.json',null,callback);
		},
		setTimes: function(params,callback){
			this.POST('theses/times.json',params,callback);
		},
		getDepartments: function(params,callback){
			this.GET('departments/show.json',params,callback);
		},
		createDepartment: function(params,callback){
			this.POST('department/create.json',params,callback);
		},
		createMajor: function(params,callback){
			this.POST('major/create.json',params,callback);
		},
		getUsers: function(params,callback){
			this.GET('users/show.json',params,callback);
		},
		checkUsername: function(params,callback){
			this.GET('user/username_exists.json',params,callback);
		},
		createUser: function(params,callback){
			this.POST('user/create.json',params,callback);
		},
		getAllTeachers: function(page,callback){
			var account = this.get('authenticateWithAccount');
			if (!account) return;

			var params = {
				deptid: account.user.get('departmentInfo').deptid,
				max_level: 40,
				min_level: 30,
				page: page,
				count: 20,
			};

			this.GET('users/show.json',params,callback);
		},
		getSeniorTeachers: function(page,callback){
			var account = this.get('authenticateWithAccount');
			if (!account) return;

			var params = {
				deptid: account.user.get('departmentInfo').deptid,
				level: 40,
				page: page,
				count: 20,
			};

			this.GET('users/show.json',params,callback);
		},
		getNormalTeachers: function(page,callback){
			var account = this.get('authenticateWithAccount');
			if (!account) return;

			var params = {
				deptid: account.user.get('departmentInfo').deptid,
				level: 30,
				page: page,
				count: 20,
			};

			this.GET('users/show.json',params,callback);
		},
		levelUpTeacher: function(teacherid,callback){
			var params = {
				id: teacherid,
			};
			this.POST('teachers/levelup.json',params,callback);
		},
		levelDownTeacher: function(teacherid,callback){
			var params = {
				id: teacherid,
			};
			this.POST('teachers/leveldown.json',params,callback);
		},
	});
});
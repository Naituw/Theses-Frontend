define(['app'],function(app){
	app.API = Em.Object.extend({
		authenticateWithAccount: null,
		apiRoot: null,
		invisible: false,
		async: true,

		_apiRoot: function(){
			if (this.apiRoot) return this.apiRoot;
			if (this.authenticateWithAccount) return this.authenticateWithAccount.apiRoot;
			return null;
		}.property(),
		authHeader: function(){
			var account = this.authenticateWithAccount;
			if (!account) return null;
			if (!account.authToken && account.username && account.password){
				account.authToken = account.tokenWithPassword(account.password);
			}
			return account.authToken;
		},
		request: function(path, method, parameters, callback, file){
			if (!this.authenticateWithAccount) return;
			var url = this.get("_apiRoot") + path;
			var invisible = this.invisible;

			if (!invisible) app.startLoading();

			var successCallback = function(data, textStatus, jqXHR){
				if (callback) {
					if (data) {
						if (data.code != 200) callback(data.object, data);
						else callback(data.object, null);
					}
					else {
						callback(null, {});
					}
				}
			};

			var errorCallback = function(jqXHR,textStatus,errorThrown){
				var data = jqXHR.responseText;
				var object = null;
				try{
					if (data) {
						data = JSON.parse(data);
						object = data.object;
					}
    			}catch(e){
        			data = {code:500,message:"服务器内部错误"};
    			}
    			if (!data) {
    				data = {};
    				if (!jqXHR.getAllResponseHeaders()){
    					data.message = "无法连接到服务器，请检查您的网络设置";
    				}
    			}
    			if (!data.message) data.message = "未知错误";
				data.errorThrown = errorThrown;
				data.aborted = (textStatus == "abort");
				if (callback) callback(object, data);
			};

			var completeCallback = function(jqXHR, textStatus){
				if (!invisible) app.stopLoading();
			};

			var headers = {
				'Auth': this.authHeader(),
			};

			var xhr = null;
			var async = this.get('async');

			if (file) {
				var data = new FormData();
				data.append('upload',file);
				for(var key in parameters){
					var value = parameters[key];
					data.append(key,value);
				}

				xhr = $.ajax(url, {
    				type: method,
    				dataType: 'json',
    				success: successCallback,
    				error: errorCallback,
    				complete: completeCallback,
    				headers: headers,
    				processData: false,
    				contentType: false,
    				data: data,
    				progress: function(e){
    					if(e.lengthComputable) {
        				    var p = (e.loaded / e.total);
        				    if (xhr.progressChanged){
        				    	xhr.progressChanged(p);
        				    }
        				}
    				}
  				});
			} else {

				xhr = $.ajax(url,{
					type: method,
					dataType: 'json',
					data: parameters,
					headers: headers,
					success: successCallback,
					error: errorCallback,
					complete: completeCallback,
					async: async,
				});
			}

			return xhr;
		},
		GET: function(path,paramaters,callback){
			return this.request(path, "GET", paramaters, callback);
		},
		POST: function(path,parameters,callback){
			return this.request(path, "POST", parameters, callback);
		},
		upload: function(path, file, desc, parameters, callback, maxSize, fileTypes){
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
				//url, file, parameters, apiObject, desc, _callback
				app.uploadManager.addTask(path, file, parameters || {}, this, desc, callback);
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
			var sha = new jsSHA(oldpsw, 'TEXT');
			var hash = sha.getHash('SHA-256','HEX');

            params.old_password = $.base64.encode(hash);
            params.password = account.tokenWithPassword(newpsw);

            this.POST('account/set_password.json',params,callback); 
		},
		updateAvatar: function(file,callback){
			this.upload('account/update_avatar.json',file,'用户头像更新',null,callback, 2 * 1024 * 1024, ['jpg','png','gif','jpeg']);
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
				deptid: account.user.get('departmentInfo.deptid'),
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
		getMyTitles: function(page, callback){
			this.GET('titles/mine.json',{page:page},callback);
		},
		getDocumentList: function(titleid, page, callback){
			var p = {
				titleid: titleid,
				page: page,
			}
			this.GET('documents/show.json',p,callback);
		},
		getTitleRelatedUsers: function(titleid,callback){
			this.GET('title/extra_info.json',{titleid:titleid},callback);
		},

		uploadDocument: function(titleid,file,callback){
			this.upload('documents/upload.json',file,file.name,{titleid:titleid},callback, 16 * 1024 * 1024, 
				['jpg','png','gif','jpeg','pdf','zip','rar','7z','doc','docx','xls','xlsx','ppt','pptx']);
		},
		deleteDocument: function(docid,callback){
			this.GET('documents/remove.json',{docid:docid},callback);
		},
		downloadDocument: function(docid,callback){
			this.GET('documents/get_url.json',{docid:docid},callback);
		},
		createDocument: function(titleid, type, contents, callback){
			if (!contents.substring) {
				contents = JSON.stringify(contents);
			}
			var params = {
				titleid: titleid,
				type: type,
				contents: contents,
			};
			this.POST('documents/create.json',params, callback);
		},
		createTitle: function(params,callback){
			this.POST('theses/create_title.json',params,callback);
		},
		getWaitingForReviewTitles: function(page, callback){
			this.GET('theses/waiting_reviews.json',{page:page},callback);
		},
		reviewTitle: function(titleid, pass, callback){
			var params = {
				title: titleid,
				pass: pass ? 1 : 2,
			};
			this.POST('theses/verify.json',params,callback);
		},
		getAvailableTitles: function(page, callback){
			this.GET('theses/availables.json',{page:page},callback);
		},
		chooseTitle: function(titleid, callback){
			this.POST('theses/choose.json',{titleid:titleid},callback);
		},
		conversationList: function(laterThan,callback){
			params = {};
			if (laterThan) params.later_than = laterThan;
			this.GET('conversations/list.json',params,callback);
		},
		markTitle: function(params, callback){
			this.POST('theses/mark.json',params,callback);
		},
		getUnread: function(callback){
			this.GET('unread/get.json',null,callback);
		},
		getMessages: function(params, callback){
			this.GET('messages/list.json',params,callback);
		},
		postMessage: function(content, userid, callback){
			if (!content || !content.length) return;
			if (!userid) return;

			var params = {
				to_user_id: userid,
				content: content,
			};

			this.POST('message/create.json', params, callback);
		},
		createConversation: function(username, callback){
			if (!username) return;

			this.POST('conversation/create.json',{to_user: username},callback);
		},

		// Notifications
		getNotifications: function(page,callback){
			this.GET('notifications/list.json',{page:page,count:5},callback);
		},
		createNotification: function(params,callback){
			this.POST('notification/create.json',params,callback);
		},
		deleteNotification: function(notificationid,callback){
			this.POST('notification/delete.json',{notificationid:notificationid},callback);
		},

		// Email Verify
		verifyEmail: function(callback){
			this.POST('account/verify_email.json',{},callback);
		},
	});
});
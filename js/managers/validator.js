define(['app'],function(app){
	app.validator = Em.Object.create({
		username: function(value,callback) {
			if (!value || !value.length) callback(false, "请填写用户名");
			else if (value.length < 4 || value.length > 16) callback(false, "用户名为4到16个字符");
			else if (!/^([a-zA-Z0-9]|[_]){4,16}$/.exec(value)) callback(false, "用户名可包含字母、数字与下划线");
			else {
				var a = app.accountManager.get('currentAccount');
				if (a) {
					a.api().checkUsername({username: value},function(result,error){
						if (error) {
							callback(false, error.message);
						}else if (result && result.result == 1) {
							callback(false, '用户名已存在');
						}else {
							callback(true, '');
						}
					});
				}
			}
		},
		email: function(value,callback){
			var regex = /^([a-zA-Z0-9]+[_|\_|\.]?)*[a-zA-Z0-9]+@([a-zA-Z0-9]+[_|\_|\.]?)*[a-zA-Z0-9]+\.[a-zA-Z]{2,3}$/;
			if (value.length > 40) calllback(false, "Email应少于40字符");
			else if (!regex.test(value)) callback(false,"请输入合法的Email地址");
			else callback(true,"");
		},
	});
});
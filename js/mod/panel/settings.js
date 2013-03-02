define(['app','text!template/panel/settings.hbs'],function(app,tpl){
	app.PanelSettingsView = Em.View.extend({
		template: Em.Handlebars.compile(tpl),
		pending: false,
        validation: function(oldpsw, psw, repsw){
        	var pswReg = /^[^\s]{6,20}$/;

        	if (!oldpsw || !oldpsw.length) return "请输入当前密码";
            else if (psw != repsw) return "两次输入的新密码不一致。";
            else if (!pswReg.test(psw)) return "新密码应当为6到20个字符的字母或数字。";
            else if (oldpsw == psw) return "新旧密码不能相同";
                
            return null;
        },
        submit: function(){
        	var that = this;
            if(this.pending) return;
            var $v = this.$();
            if($v){
                var oldpsw = $v.find('[name=old-password]').val();
                var psw = $v.find('[name=password]').val();
                var repsw = $v.find('[name=re-password]').val();     
                
                var error = this.validation(oldpsw,psw,repsw);
                if (error){
                    app.showError('提交失败',error);
                    return;
                }

                $v.find('.submit').addClass('pending');
                var panelController = app.get('panelController');
                panelController.set('loading',true);
                this.pending = true;

                app.get('accountManager').updatePassword(oldpsw, psw, function(success){
                	that.pending = false;
                    panelController.set('loading',false);
                    $v.find('.submit').removeClass('pending');

                    if (!error) panelController.closePanel();
                });
            }
        },
	});
	app.PanelSettingsController = Em.Controller.extend({
	});
});
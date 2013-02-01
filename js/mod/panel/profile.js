define(['app','text!template/panel/profile.hbs'],function(app,tpl){
	app.PanelProfileView = Em.View.extend({
		template: Em.Handlebars.compile(tpl),
        pending: false,
        validation: function(name, gender, email){
            var nameReg = /^[\u4e00-\u9fa5a-z][\u4e00-\u9fa5a-z0-9_]*$/i;
            var emailReg = /^([a-zA-Z0-9]+[_|\_|\.]?)*[a-zA-Z0-9]+@([a-zA-Z0-9]+[_|\_|\.]?)*[a-zA-Z0-9]+\.[a-zA-Z]{2,3}$/;

            if(name.length != 0 && (name.length > 10 || !nameReg.test(name))){
                return "姓名必须由中文、英文、下划线组成，并少于10个字。";
            }else if(gender > 3 || gender < 0){
                return "非法性别";
            }else if(email.length != 0 &&(email.length > 40 || !emailReg.test(email))){
                return "Email不合法或太长。"
            }

            return null;
        },
        submit: function(){
            var that = this;
            if(this.pending) return;
            var $v = this.$();
            if($v){
                var name = $v.find('[name=name]').val().trim();
                var gender = $v.find('[name=gender]').val();
                var email = $v.find('[name=email]').val().trim();
                
                var error = this.validation(name,gender,email);
                if (error){
                    app.showError('提交失败',error);
                    return;
                }

                var account = app.get('accountManager').get('currentAccount');
                if (!account){
                    return;
                }

                $v.find('.submit').addClass('pending');
                var panelController = app.get('panelController');
                panelController.set('loading',true);
                this.pending = true;

                var params = {};
                params.screenname = name;
                params.gender = gender;
                params.email = email;

                app.get('accountManager').updateProfile(params, function(data,error){
                    that.pending = false;
                    panelController.set('loading',false);
                    $v.find('.submit').removeClass('pending');

                    if (!error){
                        panelController.closePanel();
                    }
                });
            }
        },
        didInsertElement: function(){
            var gender = app.get('accountManager').get('currentAccount').get('user').get('gender');
            this.$().find('select[name=gender]').val(gender);
        },
        updateAvatar: function(){
            var input = this.$().find('.upload-avatar');
            input.click();
            input.unbind('change');
            input.change(function(){
                var file = this.files[0];
                if (file) {
                    app.get('accountManager').updateAvatar(file);
                }
            });
            //app.get('accountManager').updateAvatar();
        },
	});
	app.PanelProfileController = Em.Controller.extend({
        currentUser: function(){
            var account = app.get('accountManager').get('currentAccount');
            if (account) return account.get('user');
            return null;
        }.property('Theses.accountManager.currentAccount.user'),
	});
});
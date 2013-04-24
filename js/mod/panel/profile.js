define(['app'],function(app){
	app.PanelProfileView = Em.View.extend({
		template: app.template('panel/profile'),
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

            var c = this.get('controller');
            if (c && c.viewDidLoad) c.viewDidLoad.call(c);
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
                $(this).val('');
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
        email: '',
        emailBinding: Em.Binding.oneWay('currentUser.email'),

        viewDidLoad: function(){
            this.set('email',this.get('currentUser.email'));
        },

        emailModified: function(){
            return (this.get('email') != this.get('currentUser.email'));
        }.property('email','currentUser.email'),
        showsEmailVerificationInfo: function(){
            if (!this.get('currentUser.email')) return false;
            if (this.get('emailModified')) return false;
            return true;
        }.property('currentUser.email','emailModified'),
        showsResendEmailButton: function(){
            if (this.get('currentUser.email_verified')) return false;
            var last = this.get('currentUser.last_email_sent');
            var current = app.get('currentTime');
            var delta = current - last;
            var maxDelta = 30 * 60 * 1000; // 30 min
            return (delta >= maxDelta);
        }.property('currentUser.email_verified','currentUser.last_email_sent','Theses.currentTime'),
	});
});
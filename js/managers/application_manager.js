define(['app','model/model'],function(app){
	app.Milestone = app.Model.extend({
        "name": null,
        "desc": null,
        "tip": null,
        "time": null,
        "viewLevel": 10,
        "operationLevel": 60,
        displayTime: function(){
        	if (!this.get('time') || !this.get('formatedTime').length) return '未定';
            return this.get('formatedTime') + " 0点";
        }.property('time'),
        formatDate: function(d){
            return d.format('yyyy-MM-dd');
        },
        formatedTime: function(){
            var time = this.get('time');
            if (time) {
                var d = new Date();
                d.setTime(time);
                return this.formatDate(d);
            }
            return ;
        }.property('time'),
        currentUserLevel: function(){
        	var a = app.accountManager.get('currentAccount');
        	return a.user.level;
        }.property('Theses.accountManager.currentAccount.user'),
        canView: function(){
        	var c = this.get('currentUserLevel');
        	return (c >= this.get('viewLevel'));
        }.property('currentUserLevel'),
        canOperate: function(){
			var c = this.get('currentUserLevel');
        	return (c >= this.get('operationLevel'));
        }.property('currentUserLevel'),
        today: function(){
            var d = new Date();
            return this.formatDate(d);
        }.property(),
        isCurrent: function(){
            return this == app.milestoneManager.get('currentStone');
        }.property('Theses.milestoneManager.currentStone'),
        isNext: function(){
            return this == app.milestoneManager.get('nextStone');
        }.property('Theses.milestoneManager.nextStone'),
    });
    app.MilestoneManager = Em.Object.extend({
    	milestones: Em.A(),
        initMilestones: function(){
            var a = this.get('milestones');
            var m = app.Milestone;
            a.pushObject(m.alloc({name: "teacher_chosen",desc: "开始给教师添加资格",tip: "教师资格添加", viewLevel:30}));
            a.pushObject(m.alloc({name: "title_assign",desc: "出题开始时间", tip: "教师出题", viewLevel:30}));
            a.pushObject(m.alloc({name: "title_chosen",desc: "选题开始时间", tip: "学生选题"}));
            a.pushObject(m.alloc({name: "compose",desc: "选题截止", tip: "论文撰写"}));
            a.pushObject(m.alloc({name: "deadline",desc: "论文撰写截止", tip: "教师评审论文"}));
            a.pushObject(m.alloc({name: "oral_examination",desc: "答辩时间", tip: "答辩"}));
        },
        currentStoneIndex: function(){
            var stones = this.get('milestones');
            var now = (new Date()).getTime();
            for (var i = stones.length - 1; i >= 0; i--) {
                var s = stones[i];
                if (!s.get('canView')) continue;
                var t = s.get('time');
                if (t && t <= now){
                    return i;
                }
            }
            return -1;
        }.property('milestones.@each.time'),
        currentStone: function(){
            var i = this.get('currentStoneIndex');
            if (i < 0) return null;
            return this.get('milestones')[i];
        }.property('currentStoneIndex'),
        nextStone: function(){
            var i = this.get('currentStoneIndex');
            var ms = this.get('milestones');
            if (i < 0 || i >= ms.length - 1) return null;
            return this.get('milestones')[i + 1];
        }.property('currentStoneIndex'),
        loading: true,
        reloadMilestones: function(){
            var that = this;
            var account = app.get('accountManager').get('currentAccount');
            if (account) {
                that.set('loading',true);
                account.api().getTimes(function(data,error){
                    if(!error){
                        that.updateMilestones(data);
                    }
                    that.set('loading',false);
                });
            }
        },
        updateMilestoneForName: function(name,time){
            for(var i = 0; i < this.milestones.length; i++){
                var m = this.milestones[i];
                if (m.get('name') == name){
                    m.set('time',time);
                }
            }
        },
        updateMilestones: function(data){
            for(var i = 0; i < this.milestones.length; i++){
                var m = this.milestones[i];
                m.set('time',data[m.name]);
            }
        },
        submitStones: function(callback){
            var p = {};
            var stones = this.get('milestones');
            for (var i = 0; i < stones.length; i++) {
                var s = stones[i];
                if (s.name){
                    p[s.name] = s.time;
                }
            }
            var that = this;
            var a = app.accountManager.get('currentAccount');
            if (a) {
                that.set('loading',true);
                a.api().setTimes(p,function(data,error){
                    that.set('loading',false);
                    if(error){
                        app.showError('更新失败',error.message);
                    }else{
                        that.updateMilestones(data);                        
                    }
                    if(callback)callback();
                });
            };
        },

        isTitleAssignTime: function(){
            if (!this.get('currentStone')) return false;
            return this.get('currentStone').get('name') == 'title_assign';
        }.property('currentStone'),
        isTitleChosenTime: function(){
            if (!this.get('currentStone')) return false;
            return this.get('currentStone').get('name') == 'title_chosen';
        }.property('currentStone'),
        isComposeTime: function(){
            if (!this.get('currentStone')) return false;
            return this.get('currentStone').get('name') == 'compose';
        }.property('currentStone'),
        isTitleVerifyTime: function(){
            return this.get('isTitleAssignTime') || this.get('isTitleChosenTime');
        }.property('isTitleAssignTime','isTitleChosenTime'),
        isTitleReviewTime: function(){
            return this.get('currentStone.name') == 'deadline';
        }.property('currentStone'),
    });
    app.milestoneManager = app.MilestoneManager.create();
	app.applicationManager = Em.Object.create({
		times: null,
		running: false,
		_run: function(){
            app.milestoneManager.initMilestones();
            app.milestoneManager.reloadMilestones();
            app.majorsManager.reloadDepartments();
            app.messagesManager.initiate();
		},
		run: function(){
			if(this.get('running')) return;
			this.set('running',true);
			var a = app.accountManager.get('currentAccount');
			if(!a || !a.user) return;
			this._run();
		},
	});
});
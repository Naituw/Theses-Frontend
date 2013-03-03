define(["app"],function(app){
    app.Model = Em.Object.extend({
        update: function(args){
            this.prepareData(args);
            this.setProperties(args);
        },
        prepareData: function(args){

        },
    });
    app.Model.reopenClass({
        alloc: function(args){
            var o = this.create();
            o.update(args);
            return o;
        }
    });
    app.Levels = {
        superAdmin: 80,
        seniorAdmin: 70,
        admin: 60,
        seniorTeacher: 40,
        teacher: 30,
        student: 10,
        unknow: 0,
    };
    app.Genders = [{name:'未知',value:'0'},{name:'男',value:'1'},{name:'女',value:'2'}];
    app.NameForLevel = function(l){
        if(l >= app.Levels.superAdmin) return '超级管理员';
            else if(l >= app.Levels.seniorAdmin) return '高级管理员';
            else if(l >= app.Levels.admin) return '管理员';
            else if(l >= app.Levels.seniorTeacher) return '出题教师';
            else if(l >= app.Levels.teacher) return '教师';
            else if(l >= app.Levels.student) return '学生';
            else return '游客';
    };
    app.Major = app.Model.extend({
        "majorid": 0,
        "deptid": 0,
        "name": null,
        fullName: function(){
            if (this.name){
                return this.name + '专业';
            }
            return '';
        }.property('name'),
    });
    app.Department = app.Model.extend({
        "deptid": 0,
        "name": null,
        "director": null,
        "schoolname": null,
        "majors": null,
        directorName: function(){
            var name = '未知';
            if (this.director) {
                name = this.director.screenname || this.director.username;
            }
            return name;
        }.property('director'),
        addMajorWithData: function(data){
            data.department = this;
            var m = app.Major.alloc(data);
            var ms = this.get('majors');
            if(!ms) ms = Em.A();
            ms.pushObject(m);
        },
        prepareData: function(data){
            if (data.director){
                data.director = app.User.alloc(data.director);
            }
            if (data.majors){
                var ms = Em.A();
                for (var i = 0; i < data.majors.length; i++) {
                    var raw = data.majors[i];
                    ms.pushObject(app.Major.alloc(raw));
                };
                data.majors = ms;
            }
        },
    });
    app.User = app.Model.extend({
	    "avatar": null,
        "avatar_thumb": null,
        "department": null,
        "email": null,
        "gender": 0,
        "level": 0,
        "major_id": 0,
        "screenname": null,
        "userid": 0,
        "username": null,
        levelType: function(){
            var l = this.get('level');
            return app.NameForLevel(l);
        }.property('level'),
        avatarThumbURL: function(){
            var t = this.get('avatar_thumb');
            if (t) return t;
            return "http://tp2.sinaimg.cn/3200179125/50/0/1";
        }.property('avatar_thumb'),
        avatarURL: function(){
            var t = this.get('avatar');
            if (t) return t;
            return "http://tp2.sinaimg.cn/3200179125/180/0/1";
        }.property('avatar'),
        genderString: function(){
            if (this.gender == 0) return '未知';
            else if (this.gender == 1) return '男';
            else return '女';
        }.property('gender'),
        departmentInfo : function(){
            var d = this.get('department');
            if (!isNaN(d)){
                return app.majorsManager.departmentWithID(d);
            } else {
                return d;
            }
        }.property('department','Theses.majorsManager.departments.@each'),
        majorInfo: function(){
            var mid = this.get('major_id');
            var dept = this.get('departmentInfo');
            var result = null;
            if (mid && dept){
                dept.get('majors').forEach(function(item){
                    if (item.majorid == mid) {
                        result = item;
                    }
                });
            }
            return result;
        }.property('major_id','departmentInfo'),
        prepareData: function(data){
            if (data.department && isNaN(data.department)){
                data.department = app.Department.alloc(data.department);
            }
        },
    });
    app.TitleStates = {
        createByStudent: 1 << 1,
        pickedByTeacherAndStudent: 1 << 2,
        verifiedByAdmin: 1 << 3,
        verifiedByTeacher: 1 << 4,
        valid: 1 << 5,
    };
    app.Title = app.Model.extend({
        "titleid": 0,
        "title": null,
        "teacherid": 0,
        "student_num": 0,
        "department": null,
        "state": 0,
        "available_majors": null,
        "description": null,
        "require_info": null,
        departmentInfo : function(){
            var d = this.get('department');
            if (!isNaN(d)){
                return app.majorsManager.departmentWithID(d);
            } else {
                return d;
            }
        }.property('department','Theses.majorsManager.departments.@each'),
        valid: function(){
            return (this.state & app.TitleStates.valid) != 0;
        }.property('state'),
        verifiedByTeacher: function(){
            return (this.state & app.TitleStates.verifiedByTeacher) != 0;
        }.property('state'),
        verifiedByAdmin: function(){
            return (this.state & app.TitleStates.verifiedByAdmin) != 0;
        }.property('state'),
        verified: function(){
            return (this.get('verifiedByTeacher') && this.get('verifiedByAdmin'));
        }.property('verifiedByTeacher','verifiedByAdmin'),
        createByStudent: function(){
            return (this.state & app.TitleStates.createByStudent) != 0;
        }.property('state'),
        waitingForPick: function(){
            var s = this.state;
            if (!(s & app.TitleStates.pickedByTeacherAndStudent) && 
                !this.get('createByStudent') && 
                this.get('verifiedByAdmin')){
                return true;
            }
            return false;
        }.property('state'),
        finished: function(){
            return this.state >= 99;
        }.property('state'),
        waitingForOral: function(){
            return this.state >= 89 && this.state < 99;
        }.property('state'),
        waitingForReview: function(){
            return this.state >= 79 && this.state < 89;
        }.property('state'),
        composing: function(){
            return this.state >= 69 && this.state < 79;
        }.property('state'),
        stateName: function(){
            var that = this;
            var s = this.get('state');
            var get = function('name'){return that.get(name)};
            if (get('finished')){
                return "论文流程已结束";
            }else if (get('waitingForOral')){
                return "评审已结束，等待答辩";
            }else if (get('waitingForReview')){
                return "撰写结束，等待评审";
            }else if (get('composing')){
                return "审核通过，开始撰写";
            }
            // 论题无效，审核未通过
            else if (!get('valid')){
                if (get('verifiedByAdmin')){
                    return "教师审核未通过";
                }else if (get('verifiedByTeacher')){
                    return "管理员审核未通过";
                }
            }
            // 论题仍有效，仍在审核
            else{
                if (get('waitingForPick'){
                    return "等待学生选择";
                }else if (get('verifiedByAdmin')){
                    return "等待教师审核"
                }else{
                    return "等待管理员审核"
                }
            }
        }.property('state'),
    });
});
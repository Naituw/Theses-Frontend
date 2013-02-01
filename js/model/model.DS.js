/**
 * theses.model.js
 * Create by Wutian
 * 2012.11.03
 */
define(["app"],function(app){
	console.log('model');
	app.Model = EM.extend({
	    id:			DS.attr('number'),
	});
	app.User = app.Model.extend({
	    username: 	DS.attr('string'),
	    fullname: 	DS.attr('string'),
	    gender:	  	DS.attr('number'), 		// 0:Unknow, 1:Male, 2:Female
	    level:	  	DS.attr('number'), 		// 
	    email:		DS.attr('string'),
	    avatar:		DS.attr('string'),
	    avatarThumb:DS.attr('string'),
	    department:	DS.belongsTo('Theses.Department'),
	    major:		DS.belongsTo('Theses.Major'),
	});
	app.Department = app.Model.extend({
	    name:		DS.attr('string'),
	    school:		DS.attr('string'),
	    director:	DS.belongsTo('Theses.User'),
	});
	app.Major = app.Model.extend({
	    name:		DS.attr('string'),
	    department: DS.belongsTo('Theses.Department'),
	});
	app.TitleMember = app.User.extend({
	    selectionID:DS.attr('number'),
	    student:	DS.belongsTo('Theses.User'),
	    articleScore:DS.attr('number'),
	    oralScore:	DS.attr('number'),
	    comment:	DS.attr('string'),
	    selectTime: DS.attr('date'),
	})
	app.Title = app.Model.extend({
	    title:		DS.attr('string'),
	    teacher:	DS.belongsTo('Theses.User'),
	    department: DS.attr('Theses.Department'),
	    maxStudents:DS.attr('number'),
	    state:		DS.attr('number'),
	    createTime: DS.attr('date'),
	    description:DS.attr('string'),
	    requireInfo:DS.attr('string'),
	    members:	DS.hasMany('Theses.User'),
	});
	app.Document = app.Model.extend({
	    title:		DS.attr('string'),
	    author:		DS.belongsTo('Theses.User'),
	    doctype:	DS.attr('number'),
	    fileURL:	DS.attr('string'),
	    createTime:	DS.attr('date'),
	});
	app.Notification = app.Model.extend({
	    toUserName:	DS.attr('string'),
	    title:		DS.attr('string'),
	    content:	DS.attr('string'),
	    url:		DS.attr('string'),
	    createTime: DS.attr('date'),		
	});
});
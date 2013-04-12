define(['app','model/model'],function(app){
	app.Conversation = app.Model.extend({
		conversationid: 0,
		create_at: 0,
		last_update: 0,
		last_user_id: 0,
		with_user: null,
		prepareData: function(data){
            if (data.with_user){
                data.with_user = app.User.alloc(data.with_user);
            }
        },
        screenname: function(){
        	var user = this.with_user;
        	if (!user) return '未知用户';
        	var name = user.screenname;
        	if (name && name.length) return name;
        	return user.username;
        }.property('with_user.screenname'),
        info: function(){
        	var user = this.with_user;
        	if (!user) return '';
        	var a = Em.A();
        	if (user.username) a.pushObject(user.username);
        	var lt = user.get('levelType');
        	if (lt && lt.length) a.pushObject(lt);
        	return a.join(' / ');
        }.property('with_user.username','with_user.levelType'),
        newFlag: function(){
        	var lastView = this.get('lastViewTime');
        	var lastUpdate = this.get('last_update');
        	if (!lastView || !lastUpdate) return false;
        	return (lastUpdate > lastView);
        }.property('lastViewTime','last_update'),
        localStorageKey: function(){
        	return 'conversation-' + this.conversationid + '-lastviewed';
        }.property('this.conversationid'),
        setUnknownProperty: function(key,value){
    		if (key == "lastViewTime"){
    			localStorage[this.get('localStorageKey')] = value;
    		}
    		return this._super(key,value);
    	},
    	unknownProperty: function(key){
    		if (key == "lastViewTime"){
    			return localStorage[this.get('localStorageKey')];
    		}
    		return this._super(key);
    	},
	});
	app.Conversation.reopenClass({
        primaryKey: "conversationid",
        uri: "conversation/single.json",
        aliveTime: 0,
    });
});
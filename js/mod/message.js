define(['app','text!template/message.hbs'],function(app,tpl){
	app.MessageView = Em.View.extend({
		template: Em.Handlebars.compile(tpl),
	});
	app.MessageController = Em.Controller.extend({
		target: function(){
            return this;
        }.property(),
        init: function(){
            app.messageController = this;
        },
        opened: false,
        active: false,
        open: function(){
            this.set('opened',true);
            this.set('active',false);
            Em.run.next(this,function(){
                this.set('active',true);
            });
        },
        close: function(){
            this.set('active',false);
            var that = this;
            Em.run.later(function(){
                that.set('opened',false);
            },400);
        },
	});
});
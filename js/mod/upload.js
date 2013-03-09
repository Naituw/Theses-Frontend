define(['app','text!template/upload.hbs'],function(app,tpl){
	app.UploadPanelView = Em.View.extend({
        template: Em.Handlebars.compile(tpl),
    });

    app.UploadPanelController = Em.Controller.extend({

    });
});
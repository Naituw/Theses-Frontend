define(['app','text!template/m/titles_verify.hbs','text!template/views/review_title_cell.hbs'],function(app,tpl,cellTpl){
	app.ReviewTitleCell = Em.View.extend({
		template: Em.Handlebars.compile(cellTpl),
		classNames: ['review-title-cell'],

		opened: false,
		click: function(e){
			this.set('opened',!this.opened);
		},

		pendingState: false,
		allow: function(){
			return false;
		},
		deny: function(){
			return false;
		},

		proccessed: false,
	});
	app.TitlesVerifyView = Em.View.extend({
		template: Em.Handlebars.compile(tpl),
	});
	app.TitlesVerifyController = Em.Controller.extend({
		target: function(){
			return this;
		}.property(),

		titles: [1],
		loading: false,
		currentPage: 1,
		hasMoreTitles: function(){
			return this.get('titles.length') > 0;
		}.property('titles.length'),
	});
});
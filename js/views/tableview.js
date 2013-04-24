define(['app'],function(app){
	app.TableView = Em.View.extend({
		template: app.template('views/tableview'),
		tagName: 'table',
		classNames: ['table', 'table-bordered', 'table-hover', 'table-striped'],
		itemViewClass: app.TableViewRow,
		columnKeyLabelBinding: null,
		contentBinding: null,
		keyLabels: function(){

		}.property('context.'+this.columnKeyLabelBinding),
	});
});
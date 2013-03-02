define(['app','text!template/views/tableview.hbs'],function(app,tpl){
	app.TableView = Em.View.extend({
		tagName: 'table',
		classNames: ['table', 'table-bordered', 'table-hover', 'table-striped'],
		itemViewClass: app.TableViewRow,
		columnKeyLabelBinding: null,
		contentBinding: null,
		keyLabels: function(){

		}.property('context.'+this.columnKeyLabelBinding),
	});
});
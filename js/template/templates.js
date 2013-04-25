var RequiredTemplateNames = [
	'alert',
	'application',
	'login','main',
	'message',
	'navbar',
	'overlay',
	'sidebar',
	'upload',

	'm/dashboard',
	'm/majors',
	'm/title_chosen',
	'm/titles_admin',
	'm/titles_mine',
	'm/titles_show',
	'm/titles_verify',
	'm/users',

	'panel/apply_title',
	'panel/new_notice',
	'panel/new_title',
	'panel/panel',
	'panel/profile',
	'panel/settings',
	'panel/title_mark',
	'panel/user_edit',

	'views/chosen_title_cell',
	'views/conversation_row',
	'views/message_row',
	'views/notice_row_view',
	'views/review_title_cell',
	'views/tableview',
	'views/teachercell',

	'v/document_cell',
	'v/dropdown_button',
	'v/loadingview',
	'v/pagingview',
	'v/promptview',
	'v/textfield',
	'v/titlecell',
	'v/upload_item_view',
	'v/usercell',
	'v/userselection_cell',
	'v/wrongtime_view',
];

var RequiredFilesForTemplate = ['app'];

for (var i = 0; i < RequiredTemplateNames.length; i++) {
	var name = RequiredTemplateNames[i];
	RequiredFilesForTemplate.push('text!template/' + name + '.hbs');
};

define(RequiredFilesForTemplate, function(){
	var app = arguments[0];

	for (var i = 1; i < arguments.length; i++) {
		var name = RequiredTemplateNames[i - 1];
		var value = arguments[i];
		app.processTemplate(name,value);
	};
});
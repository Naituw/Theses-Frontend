require.config({
	baseUrl: 'js',
	paths: {
		'jquery': 'vendor/jquery-1.7.2.min',
		'plugins': 'vendor/jquery.plugins',
		'handlebars': 'vendor/handlebars-1.0.rc.1',
		'ember': 'vendor/ember-1.0.0-pre.2',
		'bootstrap': 'vendor/bootstrap.min',
		'tpl':'template/templates',
	},
	shim: {
		'handlebars': ['jquery'],
		'ember': ['handlebars'],
		'bootstrap': ['jquery'],
		'vendor/theses.ui': ['jquery','bootstrap'],
		'plugins' : ['jquery','bootstrap'],
		'app': ['ember','bootstrap','plugins'],
	},
	waitSeconds: 0,
	urlArgs: "bust=" + (new Date()).getTime(),
});

require(['boot']);
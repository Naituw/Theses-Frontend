require.config({
	baseUrl: 'js',
	paths: {
		'jquery': 'vendor/jquery-1.9.1',
		'plugins': 'vendor/jquery.plugins',
		'handlebars': 'vendor/handlebars-1.0.rc.3',
		'ember': 'vendor/ember-1.0.0-rc.3',
		'bootstrap': 'vendor/bootstrap.min',
		'tpl':'template/templates',
		'router': 'router_v2',
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
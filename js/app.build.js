({
    appDir: "../",
    baseUrl: "js",
    dir: "../../theses-app-build",
    //optimize: "none",
    paths: {
	    "jquery": "vendor/jquery-1.7.2.min",
        'plugins': 'vendor/jquery.plugins',
		'handlebars': 'vendor/handlebars.runtime',
		'ember': 'vendor/ember-1.0.0-pre.2.min',
		'bootstrap': 'vendor/bootstrap.min',
        'tpl':'template/templates_precompiled',
    },
    
    modules: [
        {
            name: "boot"
        }
    ]
})
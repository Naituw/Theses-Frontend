({
    appDir: "../",
    baseUrl: "js",
    dir: "../../theses-app-build",
    //optimize: "none",
    paths: {
	    "jquery": "vendor/jquery-1.9.1.min",
        'plugins': 'vendor/jquery.plugins',
		'handlebars': 'vendor/handlebars.runtime',
		'ember': 'vendor/ember-1.0.0-rc.3.min',
		'bootstrap': 'vendor/bootstrap.min',
        'tpl':'template/templates_precompiled',
        'router': 'router_v2',
    },
    
    modules: [
        {
            name: "boot"
        }
    ]
})
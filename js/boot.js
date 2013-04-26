define(["app","model/models",'tpl','router','mod/mods','managers/managers','views/views'],function(app){
	console.log('boot');
	app.advanceReadiness();
	app.stopLoading();
});
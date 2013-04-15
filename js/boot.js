define(["app","model/models",'router','mod/mods','managers/managers','views/views'],function(app){
	console.log('boot');
	app.initialize();
	app.stopLoading();
});
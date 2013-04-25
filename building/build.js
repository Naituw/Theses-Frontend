var child_process = require('child_process');
var fs = require('fs');
var path = require('path');

// 计算需要预编译的文件
var tplPath = path.resolve(__dirname, '../js/template');
var dirs = [], files = fs.readdirSync(tplPath);

files.forEach(function(file){
	var pathname = tplPath+'/'+file, 
		stat = fs.lstatSync(pathname);

	if (stat.isDirectory()){
	   dirs.push(file);
	}
});

var hbs = [tplPath + '/*.hbs'];
for (var i = 0; i < dirs.length; i++) {
	var dir = dirs[i];
	hbs.push(tplPath + '/' + dir + '/*.hbs');
};

var targetFile = tplPath + '/tpl.js';

// 如果 tpl.js 文件存在，则先删除
if(fs.existsSync(targetFile)) fs.unlinkSync(targetFile);

console.log('Precompling Templates...');
var cmd = 'ember-precompile ' + hbs.join(' ') + ' -f ' + targetFile;

child_process.exec(cmd,function(err,stdout,strerr){
    if (stdout) console.log(stdout);
    if (strerr) console.log(strerr);
    if (err) {
    	console.log(err);
    	return;
    }

    console.log('Template Precompling Finished.')

    // 增加 RequireJS 需要的 define函数
    console.log('Adding RequireJS Ceremony...');

    var content = fs.readFileSync(targetFile, "utf8");
    content = "define(['app'],function(app){" + content + "});";
    fs.writeFileSync(targetFile, content, 'utf8');

    // 开始Build
    console.log('Building...');
    var buildcmd = 'node ' + __dirname +'/r.js -o ' + path.resolve(__dirname, '../js') + '/app.build.js';
    var build = child_process.exec(buildcmd,function(err,stdout,strerr){
    	if (stdout) console.log(stdout);
    	if (strerr) console.log(strerr);
    	if (err) {
    		console.log(err);
    		return;
    	}
    	console.log('Done.');
    });
    build.stdout.on('data', function (data) {
  	  	console.log('' + data);
  	});

  	build.stderr.on('data', function (data) {
  	  	console.log('ERROR: ' + data);
  	});
});
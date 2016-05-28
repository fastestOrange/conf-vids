var gulp = require('gulp');
var path = require('path')
var fs = require('fs');
var exec = require('gulp-exec');
var rimraf = require('rimraf');

var pagesDir = './src/pages';
var pagesPath = path.join(process.cwd(), pagesDir)
var pages = fs.readdirSync(pagesPath)

gulp.task('default', function(){
  var pagesDir = './src/pages';
	var pagesPath = path.join(process.cwd(), pagesDir)
	var pages = fs.readdirSync(pagesPath);
	var browserFile;
	rimraf('./static/*.js', function(){
	  pages.forEach(function(page){
	 	  fs.readFile(path.join(pagesDir, page, '/package.json'), {encoding: 'utf8'}, function(err, pkg){
	   	  var browserFile = JSON.parse(pkg).browser;
	   	  var templateFile = JSON.parse(pkg).template;
	   	  var cmd = ['lasso --main src/pages/',
	   	    page,
	   	    '/',
	   	    browserFile,
	   	    '  --inject-into ',
	   	    'src/pages/',
	   	    page,
	   	    '/',
	   	    templateFile,
	   	    '  --fingerprint'
	   	  ].join('');
		    gulp.src(path.join(pagesDir, page, browserFile))
		    .pipe(exec(cmd));
	 	  });
	  })
	})
})
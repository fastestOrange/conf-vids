var path = require('path');
var fs = require('fs');
var express = require('express');
var serveStatic = require('serve-static')
var app = express();

app.use('/', require('./src/index'));

var pagesDir = './src/pages';
var pagesPath = path.join(process.cwd(), pagesDir)
var pages = fs.readdirSync(pagesPath)

pages.forEach(function(name){
  var pageHandler = path.join(pagesDir, name)
  var pagePath = '/' + name;
  app.use(pagePath, require('./'+ pageHandler));
})

app.use('/static', serveStatic(__dirname + '/static'));


// catch 404 and forward to error handler
app.use(function(req, res, next) {
  var err = new Error('Not Found');
  err.status = 404;
  next(err);
});
 

if (app.get('env') === 'development') {
  app.use(function(err, req, res, next) {
    res.status(err.status || 500);
    res.render('error', {
      message: err.message,
      error: err
    });
  });
}

// production error handler
// no stacktraces leaked to user
app.use(function(err, req, res, next) {
  res.status(err.status || 500);
  res.render('error', {
    message: err.message,
    error: {}
  });
});
 
module.exports = app;

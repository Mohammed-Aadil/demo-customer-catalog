var express = require('express');
var path = require('path');
var favicon = require('serve-favicon');
var logger = require('morgan');
var cookieParser = require('cookie-parser');
var bodyParser = require('body-parser');
var mongoose = require('mongoose');
var autoIncrement = require('mongoose-auto-increment');

var app = express();

// setting up mongoose for project
var db = mongoose.connect(process.env.MONGO_DB_URL);

autoIncrement.initialize(db.connection);

var mainRoutes = require('./routes/main');

// view engine setup
app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'jade');

// uncomment after placing your favicon in /public
//app.use(favicon(path.join(__dirname, 'public', 'favicon.ico')));
app.use(logger('dev'));
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));
app.use(cookieParser());

if (process.env.NODE_ENV === 'prod')
  app.use(express.static(path.join(__dirname, 'public/dist')));
else
  app.use(express.static(path.join(__dirname, 'public')));

// configuring routes
mainRoutes.forEach(function (route) {
  app.use('^/api' + route.path, route.route);
});

// catch 404 and forward to error handler
app.use(function(req, res, next) {
  var err = new Error('Not Found');
  err.status = 404;
  next(err);
});

// error handler
app.use(function(err, req, res, next) {
  // set locals, only providing error in development
  res.locals.message = err.message;
  res.locals.error = req.app.get('env') === 'development' ? err : {};

  // render the error page
  res.status(err.status || 500);
  res.render('error');
});

module.exports = app;

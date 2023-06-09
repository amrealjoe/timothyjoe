import createError from "http-errors";
import express from "express"
import path from "path" 
import cookieParser from "cookie-parser";
import logger from "morgan"

// var homeRouter = require('./routes/home');
// var profileRouter = require('./routes/profile');
// var blogRouter = require('./routes/blog');
import homeRouter from "./routes/home"
import profileRouter from "./routes/profile"
import blogRouter from "./routes/blog"

var app = express();

// view engine setup
app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'pug');

app.use(logger('dev'));
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(cookieParser());
app.use(express.static(path.join(__dirname, 'public')));

//router handler middleware
app.use('/', homeRouter);
app.use('/profile', profileRouter);
app.use('/blog', blogRouter);

// catch 404 and forward to error handler
app.use(function(req, res, next) {
  next(createError(404));
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

require('dotenv').config();

const createError = require('http-errors');
const express = require('express');
const path = require('path');
const cookieParser = require('cookie-parser');
const logger = require('morgan');
const hbs = require('hbs');
const session = require('express-session');
const passport = require('passport')



const indexRouter = require('./routes/index.router');
const sessionsRouter = require('./routes/sessions.router');
const usersRouter = require('./routes/user.routes');

require('./configs/hbs.config');
require('./configs/db.configs');
require('./configs/passport.config').setup(passport);

const app = express();

// view engine setup
app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'hbs');

app.use(logger('dev'));
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(cookieParser());
app.use(express.static(path.join(__dirname, 'public')));

//cookies config here 
app.use(session({
  secret: 'super secret',
  resave: false,
  saveUninitialized: true,
  cookie: {
    secure: false,
    httpOnly: true, 
    maxAge: 60 * 60 * 24 * 1000
  }
}));

app.use(passport.initialize());
app.use(passport.session());

app.use((req, res, next ) => {
  res.locals.session = req.user;
  next();
})

app.use('/', indexRouter);
app.use('/auth', sessionsRouter);
app.use('/role-selection', usersRouter);
//app.use('/bar', barRouter);

// catch 404 and forward to error handler
app.use(function(req, res, next) {
  next(createError(404));
});

// error handler
app.use(function(err, req, res, next) {
  console.error(err);
  // set locals, only providing error in development
  res.locals.message = err.message;
  res.locals.error = req.app.get('env') === 'development' ? err : {};

  // render the error page
  res.status(err.status || 500);
  res.render('error');
});

module.exports = app;

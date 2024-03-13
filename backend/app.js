var createError = require('http-errors');
var express = require('express');
var path = require('path');
var cookieParser = require('cookie-parser');
var logger = require('morgan');
var authenticate = require('./middlewares/authenticate.middleware.js')

require('dotenv').config();

var indexRouter = require('./routes/index.route');
var authRouter = require('./routes/auth.route');

var app = express();

app.use(logger('dev'));
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(cookieParser());
app.use(express.static(path.join(__dirname, 'public')));

app.use('/auth', authRouter);
app.use('/api', authenticate.verifyJwt, indexRouter);

module.exports = app;

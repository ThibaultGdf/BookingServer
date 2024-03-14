var createError = require('http-errors');
var express = require('express');
var path = require('path');
var cookieParser = require('cookie-parser');
// var logger = require('morgan');
var authenticate = require('./middlewares/authenticate.middleware.js')
const morganMiddleware = require("./middlewares/morgan.middleware");
const logger = require("./utils/logger");

require('dotenv').config();

var indexRouter = require('./routes/index.route.js');
var authRouter = require('./routes/auth.route.js');


var app = express();

// app.use(logger('dev'));
app.use(morganMiddleware);
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(cookieParser());
app.use(express.static(path.join(__dirname, 'public')));

logger.http('Debut session')

app.use('/auth', authRouter);
app.use('/api', authenticate.verifyJwt, indexRouter);

module.exports = app;

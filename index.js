var express = require('express');
var app = express();
var bodyParser = require('body-parser');
var mongoose = require("mongoose");
var jwt = require('jsonwebtoken');

var bookRouter = require('./routes/book.router');
var defaultRouter = require('./routes/default.router');
var reviewRouter = require('./routes/review.router');
var userRouter = require('./routes/user.router');
var middlewares = require('./middlewares');

var port = process.env.PORT || 3000;

app.listen(port, function () {
    console.log("Server running on port " + port);
});

mongoose.Promise = global.Promise;

//mongoose.connection.openUri("mongodb://localhost/booksdb");
mongoose.connection.openUri("mongodb://admin:admin@ds145019.mlab.com:45019/mybooksdb");
//middleware
app.use(bodyParser.json());
app.use('/', defaultRouter);
app.use('/api/user', userRouter);

app.use(middlewares.isAuthorized);

//private
app.use('/api/books', bookRouter);
app.use('/api/reviews', reviewRouter);


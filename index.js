var express = require('express');
var app = express();
var bodyParser = require('body-parser');
var mongoose = require("mongoose");
var jwt = require('jsonwebtoken');

var bookRouter = require('./routes/book.router');
var defaultRouter = require('./routes/default.router');
var reviewRouter = require('./routes/review.router');
var userRouter = require('./routes/user.router');

app.listen(3000, function () {
    console.log("Server running on port 3000");
});

mongoose.Promise = global.Promise;

mongoose.connection.openUri("mongodb://localhost/booksdb");

//middleware
app.use(bodyParser.json());


app.use('/', defaultRouter);

function isAuthorized(req, res, next) {

    var username = req.headers["username"];
    var pwd = req.headers["password"];

    if (username === 'admin' && pwd === 'pwd') next();
    else {
        res.status(401);//Unauthorized
        res.send("Unauthorized");
    }
}

app.use('/api/user', userRouter);

app.use(isAuthorized);
//private
app.use('/api/books', bookRouter);
app.use('/api/reviews', reviewRouter);


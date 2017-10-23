var express = require('express');
var app = express();
var bodyParser = require('body-parser');
var mongoose = require("mongoose");

var bookRouter = require('./routes/book.router');
var defaultRouter = require('./routes/default.router');

app.listen(3000, function () {
    console.log("Server running on port 3000");
});

mongoose.connect("mongodb://localhost/booksdb");


//middleware
app.use(bodyParser.json());

function middleware(req, res, next) {
    next();
    // res.status(401);
    // res.send("Unauthorized");
}

app.use('/', defaultRouter);
//app.use(middleware);
app.use('/api/books', bookRouter);


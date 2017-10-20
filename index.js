var express = require('express');
var app = express();
var bodyParser = require('body-parser');

var bookRouter=require('./routes/book.router');
var defaultRouter=require('./routes/default.router');

app.listen(3000, function () {
    console.log("Server running on port 3000");
});

//middleware
app.use(bodyParser.json());

app.use('/',defaultRouter);
app.use('/books',bookRouter);

var express = require('express');

var app = express();

app.listen(3000, function () {
    console.log("Server running on port 3000");
});

app.get('/', function (req, res) {
    res.send("Home page");
});

app.get('/books', function (req, res) {

    var books = [
        { id: 1, title: 'Speaking Javascript', price: 30 },
        { id: 2, title: 'Algorithms and Data Structures', price: 20 },
        { id: 3, title: 'Headfirst Javascript', price: 15 }];

        res.status(200); //ok
        res.json(books);
});

app.get('/products',function(req,res){
    res.status(200);
    res.send("List of products");
})
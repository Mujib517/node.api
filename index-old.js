var http = require('http');
var fs = require('fs');


function handleRequests(req, res) {

    //routing
    switch (req.url) {
        case '/':
            var content = fs.readFileSync('index.html');
            res.write(content);
            break;
        case '/books':
            var books = [
                { id: 1, title: 'Speaking Javascript', price: 30 },
                { id: 2, title: 'Algorithms and Data Structures', price: 20 },
                { id: 3, title: 'Headfirst Javascript', price: 15 }];

            res.write(JSON.stringify(books));
            break;
        case '/products':
            res.write("List of Products");
            break;
        default:
            res.write("Hello NodeJs");
            break;
    }
    res.end();
};


var server = http.createServer(handleRequests);


server.listen(3000, function () {
    console.log("Server running on 3000");
});




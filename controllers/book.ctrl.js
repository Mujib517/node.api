//ODM  
var Book = require('../models/book.model');
var Review = require('../models/review.model');

function BookCtrl() {

    this.get = function (req, res) {

        var pageSize = +req.params.pageSize || 5;
        var pageIndex = +req.params.pageIndex || 0;

        Book.count(function (err, count) {

            if (!err) {
                var query =
                    Book
                        .find()
                        .skip(pageSize * pageIndex)
                        .limit(pageSize)
                        .sort("-lastUpdated");


                query
                    .exec()
                    .then(function (books) {
                        var response = {
                            books: books,
                            metadata: {
                                count: count,
                                pages: Math.ceil(count / pageSize)
                            }
                        }

                        res.status(200);
                        res.json(response);
                    })
                    .catch(function (err) {
                        res.status(500);
                        res.send("Internal Server Error");
                    });

                // query.exec(function (err, books) {


                // });
            }

        });




        //asychrnouse operations

    };

    this.getById = function (req, res) {

        var id = req.params.id;

        Book.findById(id).exec()
            .then(function (book) {
                if (!book) {
                    res.status(404);
                    res.send("Not found");
                }
                else {

                    var jsonBook = book.toJSON();

                    Review.find({ bookId: jsonBook._id })
                        .exec()
                        .then(function (reviews) {
                            jsonBook.reviews = reviews;
                            res.status(200);
                            res.json(jsonBook);
                        });
                }
            })
            .catch(function (err) {
                res.status(500);
                res.send("Internal Server Error");
            })
    };

    this.save = function (req, res) {

        var book = new Book(req.body);
        book.save(function (err, book) {
            if (err) {
                res.status(500);
                if (err.errmsg & err.errmsg.indexOf("duplicate key error index"))
                    res.send("Book already exists");
                else
                    res.send(err);
            }
            else {
                res.status(201); //created
                res.send("Saved!");
            }
        });
    };

    this.update = function (req, res) {

        var book = new Book(req.body);

        Book.findByIdAndUpdate(book._id, book, function (err, updatedBook) {
            if (!err) {
                res.status(200);
                res.json(updatedBook);
            }
            else {
                res.status(500);
                res.send("Internal Server Error");
            }
        });
    };

    this.delete = function (req, res) {

        var id = req.params.id;

        Book.remove({ _id: id }, function (err) {
            if (!err) {
                res.status(204);
                res.send("Deleted!");
            }
            else {
                res.status(500);
                res.send(err);
            }
        });
    };
};

var bookCtrl = new BookCtrl();
module.exports = bookCtrl;
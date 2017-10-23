var Book = require('../models/book.model');

function BookCtrl() {

    this.get = function (req, res) {

        //asychrnouse operations
        Book.find(function (err, books) {
            res.status(200);
            res.json(books);
        });
    };

    this.getById = function (req, res) {

        var id = req.params.id;

        Book.findById(id, function (err, book) {
            if (err) {
                res.status(500);
                res.send("Internal Server Error");
            }
            else {
                if (!book) {
                    res.status(404);
                    res.send("Not found");
                }
                else {
                    res.status(200);
                    res.json(book);
                }
            }
        });
    };

    this.save = function (req, res) {

        var book = new Book(req.body);
        book.save(function (err, book) {
            if (err) {
                res.status(500); //Internal server error
                //logging logger.error(err);
                res.send("Internal Server Error");
            }
            else {
                res.status(201); //created
                res.send("Saved!");
            }
        });
    };

    this.update = function (req, res) {

        var book = new Book(req.body);

        book.update({ _id: book._id }, function (err, updatedBook) {
            if (err) {
                res.status(500);
                res.send(err);
            }
            else {
                res.status(200);
                res.json(updatedBook);
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
var books = [
    { id: 1, title: 'Speaking Javascript', price: 30 },
    { id: 2, title: 'Algorithms and Data Structures', price: 20 },
    { id: 3, title: 'Headfirst Javascript', price: 15 }];

function BookCtrl() {

    this.get = function (req, res) {
        res.status(200); //ok
        res.json(books);
    };

    this.getById = function (req, res) {

        var id = +req.params.id;
        var book;

        for (var i = 0; i < books.length; i++) {
            if (books[i].id === id) {
                book = books[i];
                break;
            }
        }

        if (book) {
            res.status(200);
            res.json(book);
        }
        else{
            res.status(404);//not found
            res.send("Not found");
        }
    };

    this.save = function (req, res) {

        books.push(req.body);
        res.status(201); //created
        res.send("Saved!");
    };

    this.update = function (req, res) {
        res.status(200);
        res.send("Updated");
    };

    this.delete = function (req, res) {
        res.status(204);
        res.send("Deleted!");
    };
};

var bookCtrl = new BookCtrl();
module.exports = bookCtrl;
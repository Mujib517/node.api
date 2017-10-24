var Review = require('../models/review.model');


module.exports = {

    add: function (req, res) {

        var review = Review(req.body);

        review.save(function (err, review) {
            if (!err) {
                res.status(201);
                res.json(review);
            }
            else {
                res.status(500);
                res.send("Internal Server Error");
            }
        });
    }

}
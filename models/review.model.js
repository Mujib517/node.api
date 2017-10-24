var mongoose = require('mongoose');

var schema = new mongoose.Schema({
    bookId: { type: String, required: true },
    rating: { required: true, type: Number },
    comment: String,
    lastUpdated: { type: Date, default: Date.now }
});

module.exports = mongoose.model("Review", schema);
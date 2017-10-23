var mongoose = require("mongoose");

var schema = new mongoose.Schema({
    title: { type: String, required: true },
    published: { type: Boolean, default: false },
    price: { type: Number, required: true },
    lastUpdated: { type: Date, default: Date.now }
});

module.exports = mongoose.model("Book", schema);
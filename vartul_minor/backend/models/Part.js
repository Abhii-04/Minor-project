const mongoose = require('mongoose');

const partSchema = new mongoose.Schema({
    part_id: Number,
    part_name: String,
    part_number: String,
    manufacturer: String,
    category: String,
    stock_level: Number,
    price: Number,
    rating: Number
});

module.exports = mongoose.model('Part', partSchema);

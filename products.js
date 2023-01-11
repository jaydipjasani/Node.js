// Make separate schemas as collectionwise in database

const mongoose = require('mongoose');

const productSchema = new mongoose.Schema({
    name: String,
    price: Number,
});

module.exports = mongoose.model('products',productSchema)
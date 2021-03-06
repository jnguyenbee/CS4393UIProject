const mongoose = require('mongoose');

const productSchema = mongoose.Schema({
    _id: mongoose.Schema.Types.ObjectId,
    name: String,
    price: Number,
    size: String,
    color: String,
    quantity: Number,
    description: String,
    productImage: { type: String, required: true }
});

module.exports = mongoose.model('Product', productSchema);
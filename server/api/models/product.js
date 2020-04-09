const mongoose = require('mongoose');

const productSchema = mongoose.Schema({
    _id: mongoose.Schema.Types.ObjectId,
    name: String,
    price: Number,
    description: String,
    productImage: { type: String, required: true }
});

module.exports = mongoose.model('Product', productSchema);
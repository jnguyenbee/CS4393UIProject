const mongoose = require('mongoose');

const reviewSchema = mongoose.Schema({
    _id: mongoose.Schema.Types.ObjectId,
    username: String,
    rating: Number,
    description: String,
    product: { type: mongoose.Schema.Types.ObjectId, ref: 'Product' }

});

module.exports = mongoose.model('Review', reviewSchema);
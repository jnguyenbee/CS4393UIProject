const mongoose = require('mongoose');

const addressSchema = mongoose.Schema({
    _id: mongoose.Schema.Types.ObjectId,
    street: String,
    zipcode: Number,
    state: String,
    city: String,
    phoneNumber: String
});

module.exports = mongoose.model('Address', addressSchema);
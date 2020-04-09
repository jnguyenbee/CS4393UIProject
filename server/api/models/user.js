const mongoose = require('mongoose');

const userSchema = mongoose.Schema({
    _id: mongoose.Schema.Types.ObjectId,
    firstName: String,
    lastName: String,
    userName: String,
    password: String,
    email: String
});

module.exports = mongoose.model('User', userSchema);
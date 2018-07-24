const mongoose = require('mongoose');

const userSchema = new mongoose.Schema({
    name : String,
    email : String,
    photo : String,
    googleID : String
}, { timestamps });

const User = mongoose.model('User', userSchema)

module.exports = User;
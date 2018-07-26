const mongoose = require('mongoose');

const userSchema = new mongoose.Schema({
    name : String,
    email : String,
    photo : String,
    social: {
        googleId: String
    }
}, { timestamps: true, discriminatorKey: 'kind' });

const User = mongoose.model('User', userSchema)
module.exports = User;
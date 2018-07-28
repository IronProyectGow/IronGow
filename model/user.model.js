const constants = require('../constants');
const mongoose = require('mongoose');
const ROLE_USER = process.env.ROLE_USER;
const ROLE_ARTIST = process.env.ROLE_ARTIST;
const ROLE_BAR = process.env.ROLE_BAR;

const userSchema = new mongoose.Schema({
    name : String,
    email : String,
    photo : String,
    role: {
        type: String,
        enum:  [constants.ROLE_USER, constants.ROLE_ARTIST, constants.ROLE_BAR, ''],
        default: ''
    },
    social: {
        googleId: String
    }
}, { timestamps: true, discriminatorKey: 'kind' });

const User = mongoose.model('User', userSchema)
module.exports = User;
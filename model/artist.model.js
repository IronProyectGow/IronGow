const mongoose = require('mongoose');
const User = require('./user.model');

const artistSchema = new mongoose.Schema({
    songs: [String]
}, { timestamps: true, discriminatorKey: 'kind' });

const Artist = User.discriminator('Artist', artistSchema)
module.exports = Artist;
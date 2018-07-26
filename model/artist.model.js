const mongoose = require('mongoose');
const User = require('./user.model');

const artistSchema = new mongoose.Schema({
    description: String,
    genre: [String],
    albums: [{
        name : String,
        year : Number
    }],
    gallery: [String]

}, { timestamps: true, discriminatorKey: 'kind' });

const Artist = User.discriminator('Artist', artistSchema)
module.exports = Artist;

// nombre
// description
// género
// discos
// name
// year
// conciertos(Eventos)
// Instrumentos
// valoraciones / commentarios
// rol: artista
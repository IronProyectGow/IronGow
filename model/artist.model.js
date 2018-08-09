const mongoose = require('mongoose');
const User = require('./user.model');

const artistSchema = new mongoose.Schema({
    description: {
        type: String,
        required: 'Description is required',
    },
    genre: {
        type: String,
        required: 'Genre is required',
    },
    albums: [{
        name : String,
        year : Number
    }],
    gallery: [String], 
    events: [{type: mongoose.Schema.Types.ObjectId, ref: 'Event', default: null}]

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
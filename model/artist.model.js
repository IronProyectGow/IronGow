const mongoose = require('mongoose');
const User = require('./user.model');

const artistSchema = new mongoose.Schema({
    description: {
        type: String,
        required: 'Description is required',
        default: 'This description is cool'
    },
    genre: {
        type: String,
        required: 'Genre is required',
        default: 'Rock'
    },
    albums: [{
        name : String,
        year : Number
    }],
    gallery: {
        type: String,
        default:'http://s3.amazonaws.com/pix.iemoji.com/images/emoji/apple/ios-11/256/man-singer-dark-skin-tone.png'
    },
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
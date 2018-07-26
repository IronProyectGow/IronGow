const mongoose = require('mongoose');
const User = require('./user.model');

const hallSchema = new mongoose.Schema({
    description: String,
    location: String, 
    capacity: Number,
    gallery: [String]

}, { timestamps: true, discriminatorKey: 'kind' });

const Hall = User.discriminator('Hall', hallSchema)
module.exports = Hall;

// nombre
// descripción
// fotos
// localización
// aforo
// conciertos*(eventos)
// valoraciones/comentarios
// rol: sala
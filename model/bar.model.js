const mongoose = require('mongoose');
const User = require('./user.model');

const barSchema = new mongoose.Schema({
    description: String,
    location: String, 
    capacity: Number,
    gallery: [String]

}, { timestamps: true, discriminatorKey: 'kind' });

const Bar = User.discriminator('Bar', barSchema)
module.exports = Bar;

// nombre
// descripción
// fotos
// localización
// aforo
// conciertos*(eventos)
// valoraciones/comentarios
// rol: sala
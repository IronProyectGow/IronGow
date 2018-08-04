const mongoose = require('mongoose');

const eventSchema = new mongoose.Schema({
    name: String,
    date: [Date],
    price: String,
    bar: {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'bar',
    }

}, { timestamps: true });

const Event = mongoose.model('Event', eventSchema)
module.exports = Event;

// Evento
// Artista
// Sala
// Location*
// nombre
// Fecha
// Precio
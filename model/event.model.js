const mongoose = require('mongoose');

const eventSchema = new mongoose.Schema({
    name: {
        type: String,
        required: 'Event name is required',
    },
    date: {
        type: [Date],
        required: 'Date is required'
    },
    price: {
        type: String,
        required: 'Price is required'
    },
    bar: {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'Bar',
        required: 'Bar is required'
    },
    artist: {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'Artist',
        required: 'Artist is required'
    },
    users: [{
        type: mongoose.Schema.Types.ObjectId,
        ref: 'User',
    }]


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
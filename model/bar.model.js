const mongoose = require('mongoose');
const User = require('./user.model');

const barSchema = new mongoose.Schema({
    description: String,
    address: String, 
    capacity: Number,
    gallery: [String],
    // location: {
    //     type: {
    //         type: String, // Don't do `{ location: { type: String } }`
    //         enum: ['Point'], // 'location.type' must be 'Point'
    //         required: true,
    //         default: 'Point'
    //     },
    //     coordinates: {
    //         type: [Number],
    //         required: true
    //     }
    // }

}, { timestamps: true, discriminatorKey: 'kind' });

const Bar = User.discriminator('Bar', barSchema)
module.exports = Bar;
const mongoose = require('mongoose');
const User = require('./user.model');

const barSchema = new mongoose.Schema({
    description: {
        type: String,
        required: 'Description is required',
        default: 'Please fill your description'
    },
    address: {
        type: String,
        required: 'Address is required',
        unique: true,
        default: 'Fill your adress'
    },
    capacity: {
        type: Number,
        required: 'Capacity is required',
        default: 1
    },
    gallery: [String],
    location: {
        type: {
            type: String, 
            enum: ['Point'], 
            required: true,
            default: 'Point'
        },
        coordinates: {
            type: [Number],
            required: true,
            default: [1, 1]
        }
    }

}, { timestamps: true, discriminatorKey: 'kind' });

barSchema.index({ location: '2dsphere' });

const Bar = User.discriminator('Bar', barSchema)
module.exports = Bar;
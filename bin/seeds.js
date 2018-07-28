const mongoose = require('mongoose');
require('../configs/db.configs');

const User = require('../model/user.model');
const Artist = require('../model/artist.model');
const Bar = require('../model/bar.model');

// User.create({
//     name: 'tutu',
//     email: '12345',
// })

// Artist.create({
//     name: 'tu',
//     email: '1234',
//     description: 'testing artist description',
//     genre: ['pop', 'genre'],
//     albums: [{
//         name : 'kaka',
//         year : 2103
//     }],
//     gallery: ['ing']
// })

// User.count()
//     .then(number => {
//         console.log('Users:', number)
//     })

// Artist.count()
//     .then(number => {
//         console.log('Artist:', number)
//     })
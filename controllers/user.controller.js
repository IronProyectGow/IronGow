const express = require("express");
const createError = require('http-errors');
const constants = require('../constants');
const mongoose = require('mongoose');
const User = require('../model/user.model');
const Artist = require('../model/artist.model');
const Bar = require('../model/bar.model');


module.exports.profile = (req, res, next) => {
    let id = req.user._id;
    const user = req.user;

    
    console.log('ENTRO', user);

    User.findById(id)
    .then(user => {
        console.log(user)

        if(user.role === 'fan') {
            res.render('partials/users/user', {
                user
            })
        } else if (user.role === 'artist'){
            // Query de Mongoose
            

            res.render('partials/artists/artist', {
                artist,
                events
            })
        } else {
            res.render('partials/bars/bar', {
                bar
            })
        }
        
    })
    .catch(error => {
        next(error)
    })
    
}



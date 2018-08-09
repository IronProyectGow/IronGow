const express = require("express");
const createError = require('http-errors');
const constants = require('../constants');
const mongoose = require('mongoose');
const User = require('../model/user.model');
const Artist = require('../model/artist.model');
const Bar = require('../model/bar.model');
const Event=  require('../model/event.model')


module.exports.profile = (req, res, next) => {
    let id = req.user._id;
    let user = req.user;

    console.log(user);

    User.findById(id)
    .then(user => {
        console.log(user)

        if(user.role === 'user') {
            res.render('partials/users/user', {
                user: req.user
            })
        } else if (user.role === 'artist'){
            // Query de Mongoose
            Event.find({'artist': id})
            .then(events => {

                res.render('partials/artists/artist', {
                    artist: req.user,
                    events
                })
            })
            .catch(err => {
                next(err)
            })

        } else {
            res.render('partials/bars/bar', {
                bar: req.user
            })
        }
        
    })
    .catch(error => {
        next(error)
    })
    
}



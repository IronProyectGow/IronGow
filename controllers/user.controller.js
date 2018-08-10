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
    
    .populate('events')
    .then(user => {
        if(user.role === 'bar') {
            Event.find({'bar': id})
            .then(events => {
            res.render('partials/bars/bar', {
                bar: req.user,
                compareIDS: [req.user._id, id],
                events
            })
            })
        } else if (user.role === 'artist'){
            Event.find({'artist': id})
            .then(events => {
                res.render('partials/artists/artist', {
                    artist: req.user,
                    events,
                    compareIDS: [req.user._id, id]
                })
            })
            .catch(err => {
                next(err)
            })

        } else { 
            Event.find({'users': id})
                .then(events => {
                    res.render('partials/users/user', {
                        user: req.user,
                        events
                    })
                })
        }
    })
    .catch(error => {
        next(error)
    })
    
}



const express = require('express');
const mongoose = require('mongoose');
const createError = require('http-errors');
const Event = require('../model/event.model');
const Bar = require('../model/bar.model');
const Artist = require('../model/artist.model');
const User = require('../model/user.model');

module.exports.doCreateBarEvent = (req, res, next) => {
    const id = req.body.bar;
    Bar.findById(id)
        .then((bar) => {
            if (bar) {
                let event = new Event({
                    name: req.body.name,
                    price: req.body.price,
                    bar: bar._id,
                    artist: req.body.artist
                });

                event.save()
                    .then(() => {
                        return event.save();
                    })
                    .then(()=> {
                        res.redirect(`/bars/${id}`)
                    })
                    .catch(error => {next(error);})
            } else {
                error => { next(error);}
            }
        })
}

module.exports.detail = (req, res, next) => {
    const id = req.params.id;
    const user = req.user;

    Event.findById(id)
        .then( event => {
            Bar.findById(event.bar)
                .then(bar => {
                    Artist.findById(event.artist)
                        .then(artist =>{
                                User.findById(user.id)
                                    .then((user)=> {
                                        if (bar) {
                                            res.render('partials/events/event', { event, bar, artist, user,
                                            compareIDS: [req.user._id, id] })
                                        } else {
                                            res.render('partials/events/event', { event })
                                        }
                                    })
                            
                        })
                    
                })

        })
        .catch(error => {next(error);})
}

module.exports.edit = (req, res, next) => {
    const id = req.params.id;

    Event.findById(id)
        .then(event => {
            Bar.findById(event.bar)
                .then(bar => {
                    if (bar) {
                        res.render('partials/events/event_form', { event, bar})
                    } else {
                        res.render('partials/events/event', { event })
                    }
                })
        })
        .catch(error => {next(error);})
}

module.exports.doEdit = (req, res, next) => {
    const id = req.params.id;

    let updateSet = {
        name : req.body.name,
        price : req.body.price,
        artist : req.body.artist
    }

    console.log(req.body.artist);
    Event.findByIdAndUpdate(id, {$set : updateSet}, { new: true, runValidators: true })
        .then(event => {
            if (event) {
                res.redirect(`/events/${id}`);
            } else {
                next(createError(404));
            }
        })
        .catch( error => next(error));
    
}

module.exports.delete = (req, res, next) => {
    const id = req.params.id;

    Event.findByIdAndRemove(id)
        .then(event => {
            const barID = event.bar;
            res.redirect(`/bars/${barID}`)
        })
        .catch(error => {
            next(error);
        })
}

module.exports.follow = (req, res, next) => {
    const id = req.params.id;
    const follower = req.body.follow;

    console.log(follower);

    Event.findByIdAndUpdate(id, {$push: {users: follower}}, { new: true, runValidators: true })
        .then(event => {
            User.findByIdAndUpdate(follower, {$push: {events: id}}, { new: true, runValidators: true } )
                .then((user) => {
                    console.log(event);
                    console.log(user);
                    res.redirect(`/events/${id}`)
                })
        })
        .catch(error => {next(error);})
}
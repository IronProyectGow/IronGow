const express = require('express');
const mongoose = require('mongoose');
const createError = require('http-errors');
const Event = require('../model/event.model');
const Bar = require('../model/bar.model');
const Artist = require('../model/artist.model');

module.exports.doCreateBarEvent = (req, res, next) => {
    const id = req.body.bar;
    const artistName = req.body.artist;
    console.log(req.body);
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
                        Artist.find({name: artistName})
                            .then((artist) => {
                                console.log(artist.events)
                                artist.events.push(event)
                                console.log(artist)
                            })
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

    Event.findById(id)
        .then( event => {
            Bar.findById(event.bar)
                .then(bar => {
                    if (bar) {
                        res.render('partials/events/event', { event, bar })
                    } else {
                        res.render('partials/events/event', { event })
                    }
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
        price : req.body.price 
    }

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
    console.log(id);

    Event.findByIdAndRemove(id)
        .then(event => {
            const barID = event.bar;
            res.redirect(`/bars/${barID}`)
        })
        .catch(error => {
            next(error);
        })
}
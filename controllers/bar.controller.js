const express = require('express');
const mongoose = require('mongoose');
const createError = require('http-errors');
const Bar = require('../model/bar.model');
const Artist = require('../model/artist.model');
const Event = require('../model/event.model');

module.exports.list = (req, res, next) => {
    Bar.find()
        .then(bars => {
            res.render('partials/bars/bar-list', {
                bars
            })
        })
        .catch(error => next(error));
}

module.exports.detail = (req, res, next) => {
    const id = req.params.id;

    Bar.findById(id)
        .then(bar => {
            Event.find({'bar': id})
                .then(events => {
                    if(events) {
                        res.render('partials/bars/bar', {bar, events,
                        compareIDS: [req.user._id, id]})
                    } else {
                        res.render('partials/bars/bar', { bar })
                    }
                })

        })
        .catch(error => next(error));
}

module.exports.edit = (req, res, next) => {
    const id = req.params.id;

    Bar.findById(id)
        .then(bar => {
            if (bar) {
                res.render('partials/form', { bar })
            } else {
                next(createError(404));
            }
        })
        .catch(error => next(error));
}

module.exports.doEdit = (req, res, next) => {
    const id = req.params.id;

    let updateSet = {
        description: req.body.description, 
        capacity: req.body.capacity,
        location: {
            type: 'Point',
            coordinates: [req.body.longitude, req.body.latitude]
        }, 
        address : req.body.address
    }

    Bar.findByIdAndUpdate(id, { $set: updateSet }, { new: true, runValidators: true })
        .then(bar => {
            if (bar) {
                res.redirect(`/bars/${id}`)
            } else {
                next(createError(404));
            }
        })
        .catch(error => {
            if (error instanceof mongoose.Error.ValidationError) {
                res.render('partials/form', {
                    bar: req.body,
                    errors: error.errors
                });
            } else {
                next(error);
            }
    })
}

module.exports.createEvent = (req, res, next) => {
    const id = req.params.id;

    Bar.findById(id)
        .then( bar => {
            if (bar) {
                Artist.find()
                    .then((artists) => {
                        res.render('partials/event_edit', {
                            artists,
                            bar,
                            event : new Event()
                    })
                })
            } else {
                next(error);
            }
        })
        .catch(error => { next(error); })
}
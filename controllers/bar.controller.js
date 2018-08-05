const express = require('express');
const mongoose = require('mongoose');
const createError = require('http-errors');
const Bar = require('../model/bar.model');
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
        //.populate('events')
        .then(bar => {
            Event.find({'bar': id})
                .then(events => {
                    if(events) {
                        res.render('partials/bars/bar', {bar, events})
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
        }
    }

    Bar.findByIdAndUpdate(id, { $set: updateSet }, { new: true, runValidators: true })
        .then(bar => {
            if (bar) {
                res.redirect(`/bars/${id}`)
            } else {
                next(createError(404));
            }
        })
        .catch(error => next(error));
}

module.exports.createEvent = (req, res, next) => {
    const id = req.params.id;

    Bar.findById(id)
        .then( bar => {
            if (bar) {
                res.render('partials/event_edit', {
                    bar,
                    event : new Event()
                })
            } else {
                next(error);
            }
        })
        .catch(error => { next(error); })
}
const express = require('express');
const mongoose = require('mongoose');
const createError = require('http-errors');
const Event = require('../model/event.model');
const Bar = require('../model/bar.model');



module.exports.doCreateBarEvent = (req, res, next) => {
    const id = req.body.bar;

    Bar.findById(id)
        .then(bar => {
            if (bar) {
                let event = new Event({
                    name: req.body.name,
                    price: req.body.price,
                    bar: bar._id
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

//module.exports.delete = (req, res, next) =>{
    //const id = req.params.id;

    // Event.findById(id)
    //     .then( event => {
    //         Bar.findById(event.bar)
    //             .then(event.remove()
    //                 .then(()=>{
    //                     res.redirect(`/bars/${event.bar}`)
    //                 })
    //             )
    //             .catch( error => next(error));
    //     })
    //     .catch(error => {next(error);})
//}
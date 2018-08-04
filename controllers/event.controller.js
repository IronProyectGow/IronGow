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
                        bar.events.push(event);

                        return event.save();
                    })
                    .then(()=> {
                        console.log(bar)
                        res.redirect(`/bars/${id}`)
                    })
                    .catch(error => {next(error);})
            } else {
                error => { next(error);}
            }
        })
}


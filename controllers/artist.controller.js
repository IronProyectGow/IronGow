const errors = require("http-errors");
const mongoose = require("mongoose");
const Artist = require("../model/artist.model");
const Event = require("../model/event.model");

module.exports.list = (req, res, next) => {
    Artist.find()
    .then(artists => {
      res.render('partials/artists/artist-list', { 
        artists
      });
    })
    .catch(error => {
      next(error);
    });
}; 

module.exports.detail = (req, res, next) => {
    const id = req.params.id;

    Artist.findById(id)
        .then(artist => {
            Event.find({'artist': id})
            .then(events => {
                console.log('Event', events)
                if(events) {
                    res.render('partials/artists/artist', { artist, events })
                } else {
                    res.render('partials/bars/bar', { artist })
                }
            })
        })
        .catch(error => next(error));
}

module.exports.edit = (req, res, next) => {
    const id = req.params.id;

    Artist.findById(id)
        .then(artist => {
            if (artist) {
                res.render('partials/form', { artist })
            } else {
                next(createError(404));
            }
        })
        .catch(error => next(error));
}

module.exports.doEdit = (req, res, next) => {
    const id = req.params.id;

    const updateSet = {
        description: req.body.description,
        genre: req.body.genre
    }

    Artist.findByIdAndUpdate(id, { $set: updateSet }, { new: true, runValidators: true })
        .then(artist => {
            if (artist) {
                res.redirect(`/artists/${id}`)
            } else {
                next(createError(404));
            }
        })
        .catch(error => {
            console.log(error.errors);
            if (error instanceof mongoose.Error.ValidationError) {
                res.render('partials/form', {
                    artist: req.body,
                    errors: error.errors
                });
            } else {
                next(error);
            }
    })
}

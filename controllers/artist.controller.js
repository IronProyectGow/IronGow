const errors = require("http-errors");
const mongoose = require("mongoose");
const Artist = require("../model/artist.model")

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


const express = require("express");
const createError = require('http-errors');
const constants = require('../constants');
const mongoose = require('mongoose');
const User = require('../model/user.model');

module.exports.profile = (req, res, next) => {
    console.log(req.user.gallery)
    let id = req.user._id
    User.findById(id)
    .then(user => {
        res.render('partials/users/user', {
            user
        })
    })
    .catch(error => {
        next(error)
    })
    
}

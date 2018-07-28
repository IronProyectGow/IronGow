const express = require("express");
const createError = require('http-errors');
const constants = require('../constants');

module.exports.renderProfile = (req, res, next) => {
    res.render('profile')
}

module.exports.doProfile = (req, res, next) => {
    const role = req.body.role;
    const user = req.user;
    console.log(req);
    
    let redirectUrl = '';
    switch (role) {
        case constants.ROLE_USER:
            redirectUrl = `/users/${user._id}/profile`;
            break;
        case constants.ROLE_ARTIST:
            redirectUrl = `/artists/${user._id}/profile`;
            user.kind = 'Artist';
            user.__t = 'Artist';
            break;
        case constants.ROLE_BAR:
            redirectUrl = `/bar/${user._id}/profile`;
            user.kind = 'Artist';
            user.__t = 'Bar';
            break;
        default:
            next(createError(404));
            return;
    }

    user.role = role;
    user.save()
        .then(user => {
            res.redirect(redirectUrl);
        })
        .catch(error => next(error));
}
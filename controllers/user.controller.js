const spotify = require("spotify-web-api-node");
const express = require("express");
const createError = require('http-errors');

modulue.exports.doProfile = (req, res, next) => {
    const kind = req.body.kind;
    const user = req.user;
    const redirectUrl = '';
    switch (kind) {
        case ROLE_USER:
            redirectUrl = `/users/${user._id}/profile`;
            break;
        case ROLE_ARTIST:
            redirectUrl = `/artists/${user._id}/profile`;
            user.kind = 'Artist';
            break;
        case ROLE_BAR:
            redirectUrl = `/bar/${user._id}/profile`;
            user.kind = 'Bar';
            break;
        default:
            next(reateError(404));
            return;
    }

    user.save()
        .then(user => {
            res.redirect(redirectUrl);
        })
        .catch(error => next(error));
}
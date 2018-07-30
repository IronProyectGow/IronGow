const express = require('express');
const mongoose = require('mongoose');
const Bar = require('../model/bar.model');

module.exports.list = (req, res, next) => {
    Bar.find()
    .then(bars => {
        res.render('partials/bars/bar-list', {
            bars
        })
    .catch(error => {
        next(error)
        })
    })
}
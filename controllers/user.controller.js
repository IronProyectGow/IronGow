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

// module.exports.edit = (req, res, next) => {
//     const id = req.params.id;

//     User.findById(id)
//         .then(user => {
//             if(user) {
//                 res.render('partials/form', { user })
//             } else { error }
//         })
//         .catch(error => {
//             next(error);
//         })
// }

// module.exports.doEdit = (req, res, next) => {
//     const id = req.params.id;

//     User.findById()
//         .then(user => {
//             if (user){
//                 Object.assign(user, req.body);
//                 user.save()
//                     .then(()=> {
//                         res.redirect(`/users/${id}`)
//                     })
//                     .catch(error => {next(error);})
//             } else {
//                 next(error);
//             }
            
//         })
//         .catch(error => { next(error);})
// }
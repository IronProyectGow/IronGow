const passport = require('passport');
const express = require('express');
const router = express.Router();
const sessionController = require('../controllers/sessions.controller');

router.post(
    '/google', 
    passport.authenticate('google-auth', { 
        scope: ['openid', 'profile', 'email'] 
    })
);

router.get('/google/cb', sessionController.createWithIDPCallback);

module.exports = router; 


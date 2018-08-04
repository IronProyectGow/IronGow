const express = require('express');
const router = express.Router();
const eventController = require('../controllers/event.controller');

//outer.get('/createEvent', eventController.createBarEvent);
router.post('/createEvent', eventController.doCreateBarEvent);

module.exports = router;
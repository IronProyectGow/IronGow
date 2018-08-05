const express = require('express');
const router = express.Router();
const eventController = require('../controllers/event.controller');

router.post('/createEvent', eventController.doCreateBarEvent);

router.get('/:id', eventController.detail);
router.get('/:id/edit', eventController.edit);
router.post('/:id/edit', eventController.doEdit);

module.exports = router;
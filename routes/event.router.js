const express = require('express');
const router = express.Router();
const constants = require('../constants');
const eventController = require('../controllers/event.controller');
const authMiddleware = require('../middlewares/auth.middleware');

router.post('/createEvent', eventController.doCreateBarEvent);

router.get('/:id', eventController.detail);
router.get('/:id/edit', authMiddleware.checkRole(constants.ROLE_BAR), eventController.edit);
router.post('/:id/edit', authMiddleware.checkRole(constants.ROLE_BAR), eventController.doEdit);

router.post('/:id/delete',authMiddleware.checkRole(constants.ROLE_BAR), eventController.delete);

router.post('/:id/follow', eventController.follow);

module.exports = router;
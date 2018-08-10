const constants = require('../constants');
const express = require('express');
const router = express.Router();
const barController = require('../controllers/bar.controller');
const authMiddleware = require('../middlewares/auth.middleware');

router.get('/', barController.list);

router.get('/:id', barController.detail);
router.get('/:id/edit', authMiddleware.checkRole(constants.ROLE_BAR), barController.edit);
router.get('/:id/createEvent', authMiddleware.checkRole(constants.ROLE_BAR), barController.createEvent);
router.post('/:id/edit', barController.doEdit);

// router.post('/:id/createEvent', barController.doCreateBarEvent);

module.exports = router;
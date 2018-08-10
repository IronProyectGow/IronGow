const constants = require('../constants');
const express = require('express');
const router = express.Router();
const artistController = require('../controllers/artist.controller');
const authMiddleware = require('../middlewares/auth.middleware');


router.get('/', artistController.list);

router.get('/:id', artistController.detail);
router.get('/:id/edit', authMiddleware.checkRole(constants.ROLE_ARTIST), artistController.edit);
router.post('/:id/edit', artistController.doEdit);

module.exports = router;
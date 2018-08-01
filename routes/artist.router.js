const express = require('express');
const router = express.Router();
const artistController = require('../controllers/artist.controller');


router.get('/', artistController.list);

router.get('/:id', artistController.detail);
router.get('/:id/edit', artistController.edit);
router.post('/:id/edit', artistController.doEdit);

module.exports = router;
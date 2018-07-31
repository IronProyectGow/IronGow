const express = require('express');
const router = express.Router();
const barController = require('../controllers/bar.controller');

router.get('/', barController.list);

router.get('/:id', barController.detail);
router.get('/:id/edit', barController.edit);
router.post('/:id/edit', barController.doEdit);

module.exports = router;
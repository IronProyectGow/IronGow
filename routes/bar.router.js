const express = require('express');
const router = express.Router();
const barController = require('../controllers/bar.controller');

router.get('/', barController.list);

router.get('/:id', barController.detail);
router.get('/:id/edit', barController.edit);
router.post('/:id/edit', barController.doEdit);
router.get('/:id/createEvent', barController.createEvent);
// router.post('/:id/createEvent', barController.doCreateBarEvent);

module.exports = router;
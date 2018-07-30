const express = require('express');
const router = express.Router();
const barController = require('../controllers/bar.controller');

router.get('/', barController.list);

module.exports = router;
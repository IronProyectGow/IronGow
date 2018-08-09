const constants = require('../constants');
const express = require('express');
const router = express.Router();
const userController = require('../controllers/user.controller');
const authMiddleware = require('../middlewares/auth.middleware');

router.get('/', userController.profile);

router.get('/?rt', userController.profile)


module.exports = router
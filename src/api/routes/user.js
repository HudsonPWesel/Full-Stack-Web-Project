const checkRoute = require('../../util/checkRoute');
const protectRoute = require('../../util/checkRoute');
const express = require('express');
const router = express.Router();
const userController = require('../../controllers/userController.js');

router.get('/',checkRoute, userController.getUserController);

module.exports = router;

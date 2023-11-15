const express = require('express');
const loginController = require('../../controllers/loginController');
// Controller
const router = express.Router();

router.route('/').get(loginController.login);
module.exports = router;

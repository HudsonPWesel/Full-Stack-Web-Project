const express = require('express');
const loginController = require('../../controllers/loginController');
// Controller
const router = express.Router();

router.route('/').post(loginController.login);


module.exports = router;

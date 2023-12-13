const express = require('express');
const loginController = require('../../controllers/loginController');

// Controller
const router = express.Router();

router.route('/').post(loginController.login);
router.route('/').get(loginController.getPage);

module.exports = router;

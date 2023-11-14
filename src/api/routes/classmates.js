const User = require('../../models/user');
const express = require('express');
const classmatesController = require('../../controllers/classmatesController');
const app = express();


const router  = express.Router();

router.route('/').get(classmatesController.getClassmates);
router.route('/:id').get(classmatesController.getClassmate);

module.exports = router;

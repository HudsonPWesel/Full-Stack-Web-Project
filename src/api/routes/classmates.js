const User = require('../../models/user');
const express = require('express');
const classmatesController = require('../../controllers/classmatesController');
const router  = express.Router();

router.param('id', classmatesController.checkID);

router.route('/').get(classmatesController.getClassmates);
router.route('/:id').get(classmatesController.getClassmate);

router.post('/', classmatesController.createClassmate);
module.exports = router;

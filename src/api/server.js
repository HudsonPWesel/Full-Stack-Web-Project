const express = require('express');
const app = express();
const cors = require('cors');
const sequlize = require('./database');
const User = require('../models/user');
const { createTemplateUsers, clearUsers } = require('../controllers/user.js');
app.use(cors());

// Implicity knows all defined models using sequlize.define()
sequlize
	.sync()
	.then(res => {
		app.listen(3001, () => {
			console.log(`Server started successfully! Running on port 3001`);
			User.truncate();
			createTemplateUsers(
				'Hudson',
				'Wesel',
				'cshudsonwesel@gmail.com',
				'image',
				'subheading'
			);
		});
	})
	.catch(err => {
		console.log(err);
	});

app.get('/', (req, res) => {
	console.log('Testing');
});

app.get('/classmates', (req, res) => {
	User.findAll().then(users => {
		console.log('EFE');
	});
});

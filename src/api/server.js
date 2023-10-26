const express = require('express');
const app = express();
const cors = require('cors');
const sequlize = require('./database');
const User = require('../models/user');
app.use(cors());

sequlize.sync().then(res => {
	console.log(res);
});

app.get('/', (req, res) => {
	console.log('Testing');
});

app.get('/classmates', (req, res) => {
	User.findAll().then(users => {
		console.log(users);
	});
});

app.listen(3001, () => {
	console.log(`Server started successfully! Running on port 3001`);
});

const express = require('express');
const app = express();
const cors = require('cors');
const sequlize = require('./database');
const User = require('../models/user');
const { createTemplateUsers, clearUsers } = require('../controllers/user.js');
const morgan = require('morgan');
app.use(morgan('dev'));
app.use(cors());
app.use(express.json());

const classmatesRouter = require('./routes/classmates');

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

			createTemplateUsers(
				'Graham',
				'Wesel',
				'gwesel@gmail.com',
				'image',
				'subheading'
			);
			createTemplateUsers(
				'Blake',
				'Wesel',
				'bwesell@gmail.com',
				'image',
				'subheading'
			);
		});
	})
	.catch(err => {
		console.log(err);
	});


const getHome = async (req,res) => {
    res.send('Home Page');

}
const login = async (req, res) => {
    console.log(req.body);
    res.send('Logging-in');
}


app.use('/classmates', classmatesRouter);
app.get('/', getHome);
app.post('/login', login);



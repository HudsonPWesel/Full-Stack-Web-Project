const express = require('express');
const app = express();
const cors = require('cors');
const sequlize = require('./database');
const User = require('../models/user');
const { createTemplateUsers, clearUsers } = require('../controllers/user.js');
const morgan = require('morgan');
const dotenv = require('dotenv');
const AppError = require('../util/appError');

app.use(cors());
app.use(express.json());
dotenv.config({path: '../config.env'});

app.use(morgan('dev'));
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
    console.log(process.env);
    res.send('Home Page');

}

app.use('/classmates', classmatesRouter);
app.get('/', getHome);

app.all('*', (req,res,next) => {
    next(new AppError(`Can't find ${req.originalUrl}`, 404));
 })

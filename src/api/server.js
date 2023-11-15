const express = require('express');
const app = express();
const cors = require('cors');
const sequlize = require('./database');
const User = require('../models/user');
const morgan = require('morgan');
const dotenv = require('dotenv');
const AppError = require('../util/appError');

const { createTemplateUsers, clearUsers } = require('../controllers/user.js');

const classmatesRouter = require('./routes/classmates');
const loginRouter = require('./routes/login');

app.use(cors());
app.use(express.json());
dotenv.config({path: '../config.env'});

app.use(morgan('dev'));
// Implicity knows all defined models using sequlize.define()
// WARNING --DELETING ALL USERS AT THE START OF NODE SERVER SO NEW USERS WILL BE DELETED
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



// Todo Maybe make createNewClassmate a new route
app.use('/classmates', classmatesRouter);
app.use('/', loginRouter);


app.all('*', (req,res,next) => {
    next(new AppError(`Cannot find ${req.originalUrl}`, 404));
 })

const express = require('express');
const cors = require('cors');
const sequlize = require('./database');
const User = require('../models/user');
const morgan = require('morgan');
const dotenv = require('dotenv');
const AppError = require('../util/appError');

const { createTemplateUsers, clearUsers } = require('../controllers/user.js');

const classmatesRouter = require('./routes/classmates');
const loginRouter = require('./routes/login');

const app = express();
app.use(cors());
app.use(express.json());
dotenv.config({path: '/Users/wyld7k/Desktop/Coding-Languages/Projects/fullstack-project/Full-Stack-Web-App/src/api/config.env'});

app.use(morgan('dev'));
// Implicity knows all defined models using sequlize.define()
// WARNING --DELETING ALL USERS AT THE START OF NODE SERVER SO NEW USERS WILL BE DELETED
sequlize
	.sync()
	.then(res => {
		app.listen(process.env.PORT, () => {
			console.log(`Server started successfully! Running on port ${process.env.PORT}`);
			User.truncate();
			createTemplateUsers(
				'Hudson',
				'Wesel',
				'cshudsonwesel@gmail.com',
				'image',
				'subheading',
                'password',
                'password',

			);

			createTemplateUsers(
				'Graham',
				'Wesel',
				'gwesel@gmail.com',
				'image',
				'subheading',
                'password',
                'password'
			);
			createTemplateUsers(
				'Blake',
				'Wesel',
				'bwesell@gmail.com',
				'image',
				'subheading',
                'password',
                'password'
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

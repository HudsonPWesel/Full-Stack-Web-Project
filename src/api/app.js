const express = require('express');
const cors = require('cors');
const morgan = require('morgan');
const dotenv = require('dotenv');
const AppError = require('../util/appError');
const globalErrorHandler = require('../controllers/errorController');
const { createTemplateUsers, clearUsers } = require('../controllers/user');

const classmatesRouter = require('./routes/classmates');
const loginRouter = require('./routes/login');
const userRouter = require('./routes/user');

const app = express();
app.use(cors());
app.use(express.json());
dotenv.config({path: '/Users/wyld7k/Desktop/Coding-Languages/Projects/fullstack-project/Full-Stack-Web-App/src/api/config.env'});

app.use(morgan('dev'));
// Implicity knows all defined models using sequlize.define()
// WARNING --DELETING ALL USERS AT THE START OF NODE SERVER SO NEW USERS WILL BE DELETED


// Todo Maybe make createNewClassmate a new route
app.use('/classmates', classmatesRouter);
app.use('/', loginRouter);
app.use('/user', userRouter);

app.all('*', (req,res,next) => {
    next(new AppError(`Cannot find ${req.originalUrl}`, 404));
 })
app.use(globalErrorHandler);

module.exports = app;

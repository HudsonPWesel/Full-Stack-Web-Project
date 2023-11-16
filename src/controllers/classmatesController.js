const User = require('../models/user');
const AppError = require('../util/appError');
const catchAsync = require('../util/catchAsync');
const jwt = require('jsonwebtoken');
const { createTemplateUsers, clearUsers } = require('../controllers/user.js');


exports.checkID = async (req,res,next,val) => {
    const users = await User.findAll();
    console.log(users);
    if (val > users.length){
        return res.status(404).json({
            status: 'fail',
            message: 'Invalid ID'
        })
    }
    next();
}
exports.getClassmate = catchAsync(async (req, res, next) => {
    const users = await User.findAll();
    const user = users.find(element => 
        element.id == req.params.id
    );
    if(user)
        res.status(201).json({
            status: 'success',
            data : {
                user
            }
        });
    else
        next(new AppError(`Could Not Find User ${req.params.id}`, 404));


});

exports.getClassmates = catchAsync(async (req, res, next) => {
    const users = await User.findAll();
    if (users)
        res.status(201).json({
            status: 'success',
            data : {
                users
            }
        });
    else
        next(new AppError('Request  Failed', 404));

});

exports.createClassmate = catchAsync(async (req, res, next) => {
    const data = req.body;
    const token = jwt.sign( {data: data.id}, process.env.JWT_SECRET, {expiresIn : process.env.JWT_EXPIRES});
    if(! await User.findOne({where : {email : data.email}})) {
        res.status(201).json({
            status: 'success',
            token,
            data : {
                user: req.body
            }
        }
        );
    }else 
        throw new Error('Duplicate User');
});

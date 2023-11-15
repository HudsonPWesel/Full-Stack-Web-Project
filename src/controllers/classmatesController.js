const User = require('../models/user');
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

    res.status(201).json({
        status: 'success',
        data : {
            user
        }
    }
    );

});

exports.getClassmates = catchAsync(async (req, res, next) => {
    const users = await User.findAll();

    res.status(201).json({
        status: 'success',
        data : {
            users
        }
    }
    );

});

exports.createClassmate = catchAsync(async (req, res, next) => {
    const data = req.body;
    const token = jwt.sign( {data: data.id}, process.env.JWT_SECRET, {expiresIn : process.env.JWT_EXPIRES});
    createTemplateUsers(data.firstName,data.lastName,data.email,data.imageUrl,data.subheading, data.password, data.passwordConfirm);
    res.status(201).json({
        status: 'success',
        token,
        data : {
            user: req.body
        }
    }
    );
});

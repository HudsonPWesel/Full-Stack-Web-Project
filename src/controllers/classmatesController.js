const User = require('../models/user');
const jwt = require('jsonwebtoken');
const { createTemplateUsers, clearUsers } = require('../controllers/user.js');

exports.checkID = async (req,res,next, val) => {
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
exports.getClassmate = async (req, res) => {
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

}

exports.getClassmates = async (req, res) => {
    const users = await User.findAll();

    res.status(201).json({
        status: 'success',
        data : {
            users
        }
    }
    );

}

exports.createClassmate = async (req, res) => {
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
}

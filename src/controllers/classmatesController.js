const User = require('../models/user');
const jwt = require('jsonwebtoken');
const { createTemplateUsers, clearUsers } = require('../controllers/user.js');

exports.checkID = (req,res,next, val) => {
    if (val > 3){
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
    
    res.send(user);

}

exports.getClassmates = async (req, res) => {
    const users = await User.findAll();
    res.send(users);

}

exports.createClassmate = async (req, res) => {
    const data = req.body;
    // const token = jwt.sign({id: data.id}, 'PLACEHOLDER');

    createTemplateUsers(data.firstName,data.lastName,data.email,data.imageUrl,data.subheading, data.password, data.passwordConfirm);
    res.status(201).json({
        status: 'success',
        data : {
            user: req.body
        }
    }
    );
}

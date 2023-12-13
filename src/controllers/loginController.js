const jwt = require('jsonwebtoken');
const User = require('../models/user');
const passwordHasher = require('../util/passwordhasher.js');
const bcrypt = require('bcrypt');

exports.login = async (req,res) => {
    
    // TODO: INPUT VALIDATION
    const users = await User.findAll();

    const olduser = users.find(element => element.email === req.body.email);
    const isAuthenticated = await bcrypt.compare(req.body.password, olduser.passwordConfirm);

    const token = jwt.sign( {data: olduser.id}, process.env.JWT_SECRET, {expiresIn : process.env.JWT_EXPIRES} );

    if(isAuthenticated)
        res.status(200).json({
            status: 'success',
            data : {
                token
            }

        });
}

exports.getPage = (req, res) => {
    res.status(200).json({
        status: 'success'
    })
}       


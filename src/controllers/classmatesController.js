const express = require('express');
const User = require('../models/user');
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


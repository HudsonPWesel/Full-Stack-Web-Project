const express = require('express');
const User = require('../models/user');

exports.getClassmate = async (req, res) => {
    const users = await User.findAll();
    const user = users.find(element => 
        element.id == req.params.id
    );
    if (!user){
        return res.status(404).json({
            status: 'fail',
            message: 'Invalid ID'
        })
    }
    res.send(user);


}

exports.getClassmates = async (req, res) => {
    const users = await User.findAll();
    res.send(users);
}


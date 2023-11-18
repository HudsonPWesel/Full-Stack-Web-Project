
const User = require('../models/user');
const passwordHasher = require('../util/passwordhasher.js');
const bcrypt = require('bcrypt');

exports.login = async (req,res) => {
    // TODO: INPUT VALIDATION
    const users = await User.findAll();

    const olduser = users.find(element => element.email === req.body.email);
    const isAuthenticated = await bcrypt.compare(req.body.password, olduser.passwordConfirm);

    if(isAuthenticated)
        res.send('Authenticated');



}
       


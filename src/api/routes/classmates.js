const User = require('../../models/user');
const express = require('express');

const app = express();

const getClassmate = async (req, res) => {
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

const getClassmates = async (req, res) => {
    const users = await User.findAll();
    res.send(users);
}

const router  = express.Router();

router.route('/').get(getClassmates);
router.route('/:id').get(getClassmate);

module.exports = router;

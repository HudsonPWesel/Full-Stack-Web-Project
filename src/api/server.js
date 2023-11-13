const express = require('express');
const app = express();
const cors = require('cors');
const sequlize = require('./database');
const User = require('../models/user');
const { createTemplateUsers, clearUsers } = require('../controllers/user.js');
app.use(cors());
app.use(express.json());

// Implicity knows all defined models using sequlize.define()
sequlize
	.sync()
	.then(res => {
		app.listen(3001, () => {
			console.log(`Server started successfully! Running on port 3001`);
			User.truncate();
			createTemplateUsers(
				'Hudson',
				'Wesel',
				'cshudsonwesel@gmail.com',
				'image',
				'subheading'
			);

			createTemplateUsers(
				'Graham',
				'Wesel',
				'gwesel@gmail.com',
				'image',
				'subheading'
			);
			createTemplateUsers(
				'Blake',
				'Wesel',
				'bwesell@gmail.com',
				'image',
				'subheading'
			);
		});
	})
	.catch(err => {
		console.log(err);
	});

const getClassmate = async (req, res) => {
    console.log('CLASSMATE');
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
const getHome = async (req,res) => {
    res.send('Home Page');

}
const getClassmates = async (req, res) => {
    const users = await User.findAll();
    res.send(users);
}
const login = async (req, res) => {
    console.log(req.body);
    res.send('Logging-in');
}

app.get('/', getHome);
app.get('/classmates/:id', getClassmate)
app.get('/classmates', getClassmates);
app.post('/login', login)

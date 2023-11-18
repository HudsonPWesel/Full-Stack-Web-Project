const sequlize = require('./database');
const User = require('../models/user');
const { createTemplateUsers, clearUsers } = require('../controllers/user.js');

const app = require('./app.js');

sequlize
	.sync()
	.then(res => {
		app.listen(process.env.PORT, () => {
			console.log(`Server started successfully! Running on port ${process.env.PORT}`);
			User.truncate();
			createTemplateUsers(
				'Hudson',
				'Wesel',
				'cshudsonwesel@gmail.com',
				'image',
				'subheading',
                'password',
                'password',

			);

			
		});
	})
	.catch(err => {
		console.log(err);
	});



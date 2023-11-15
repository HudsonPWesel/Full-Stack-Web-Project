const Sequelize = require('sequelize');
const bcrypt = require('bcrypt');
const sequelize = require('../api/database');



// User defined template (DB Table)
const User = sequelize.define('user', {
	id: {
		type: Sequelize.INTEGER,
		autoIncrement: true,
		allowNull: false,
		primaryKey: true,
	},
	firstName: {
		type: Sequelize.STRING,
		allowNull: false,
	},

	lastName: {
		type: Sequelize.STRING,
		allowNull: false,
	},
	email: {
		type: Sequelize.STRING,
		allowNull: false,
	},
	imageUrl: {
		type: Sequelize.STRING,
		allowNull: false,
	},
	subheading: {
		type: Sequelize.STRING,
		allowNull: false,
	},
    password:{
        type: Sequelize.STRING,
        allowNull: false,
    },
    passwordConfirm : {
         type: Sequelize.STRING,
        allowNull: true,

    }
});

User.beforeCreate((user, options) => {
    console.log(user.firstName);
    return bcrypt.hash(user.password, 10)
        .then(hash => {
            user.password = hash;
            // TODO: Implement passwordConfirm check;
            user.passwordConfirm = hash;
        })
        .catch(err => { 
            throw new Error(); 
        });
});
module.exports = User;

// Defining the database connection
const Sequelize = require('sequelize');

const sequelize = new Sequelize('LinkedInEducation', 'root', 'password', {
	dialect: 'mysql',
	host: 'localhost',
});

module.exports = sequelize;

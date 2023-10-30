// Defining the database connection
const Sequelize = require('sequelize');

const sequelize = new Sequelize('NodeComplete', 'root', 'password', {
	dialect: 'mysql',
	host: 'localhost',
});

module.exports = sequelize;

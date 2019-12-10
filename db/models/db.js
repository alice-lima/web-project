const Sequelize = require('sequelize');

const sequelize = new Sequelize('sinapseDB', 'root', '', {
	host: 'localhost',
	dialect: 'mysql'
});

module.exports = {
	Sequelize: Sequelize,
	sequelize: sequelize
};

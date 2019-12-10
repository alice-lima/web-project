const Sequelize = require('sequelize');

const sequelize = new Sequelize('sinapseDB', 'root',  null, {
	host: 'localhost',
	dialect: 'mysql'
});

module.exports = {
	Sequelize: Sequelize,
	sequelize: sequelize
};

const Sequelize = require('sequelize');

const sequelize = new Sequelize('testeweb', 'root', 'Bicicleta14', {
	host: 'localhost',
	dialect: 'mysql'
});

module.exports = {
	Sequelize: Sequelize,
	sequelize: sequelize
};

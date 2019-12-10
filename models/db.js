const Sequelize = require('sequelize');

const sequelize = new Sequelize('testeweb', 'root', 'Bicicleta14', {
	host: 'localhost',
	dialect: 'mysql',
/*
	pool: {
		max: 5,
		min: 0,
		idle: 10000
	}
*/
});

module.exports = {
	Sequelize: Sequelize,
	sequelize: sequelize
};

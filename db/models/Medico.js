const db = require('./db');

const Medico = db.sequelize.define('medicos', {
	usuario: {
		type: db.Sequelize.STRING
	}, 
	senha: {
		type: db.Sequelize.STRING
	}, 
	nome: {
		type: db.Sequelize.STRING
	}, 
	dataNasc: {
		type: db.Sequelize.STRING
	}, 
	cpf: {
		type: db.Sequelize.STRING
	}, 
	crm: {
		type: db.Sequelize.STRING
	}, 
	uf: {
		type: db.Sequelize.STRING
	}, 
	especialidade: {
		type: db.Sequelize.STRING
	}, 
	telResidencial: {
		type: db.Sequelize.STRING
	}, 
	telCelular: {
		type: db.Sequelize.STRING
	}, 
	telOutro: {
		type: db.Sequelize.STRING
	}
})

//Medico.sync({force:true})
module.exports = Medico;

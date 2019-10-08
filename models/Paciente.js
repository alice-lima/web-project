const db = require('./db');

const Paciente = db.sequelize.define('pacientes', {
	nome: {
		type: db.Sequelize.STRING
	},

	cpf: {
		type: db.Sequelize.STRING
	},

	dataNasc: {
		type: db.Sequelize.STRING
	},

	natCidade: {
		type: db.Sequelize.STRING
	},

	natEstado: {
		type: db.Sequelize.STRING
	},

	natPais: {
		type: db.Sequelize.STRING
	},

	cep: {
		type: db.Sequelize.STRING
	},

	cidade: {
		type: db.Sequelize.STRING
	},

	estado: {
		type: db.Sequelize.STRING
	},

	logradouro: {
		type: db.Sequelize.STRING
	},

	numero: {
		type: db.Sequelize.STRING
	},

	complemento: {
		type: db.Sequelize.STRING
	},

	telResidencial: {
		type: db.Sequelize.STRING
	},

	telComercial: {
		type: db.Sequelize.STRING
	},

	telCelular: {
		type: db.Sequelize.STRING
	},

	telOutro: {
		type: db.Sequelize.STRING
	}

})



module.exports = Paciente;
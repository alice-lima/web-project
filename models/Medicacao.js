const db = require('./db');

const Medicacao = db.sequelize.define('medicacoes', {
	classeTerapeutica: {
		type: db.Sequelize.STRING
	},

	apresentacao: {
		type: db.Sequelize.STRING
	},

	viaAdminstracao: {
		type: db.Sequelize.STRING
	},

	unidade: {
		type: db.Sequelize.STRING
	},

	posologia:{
		type: db.Sequelize.STRING
	}


})

Medicacao.sync({force:true});

module.exports = Medicacao;
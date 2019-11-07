const db = require('./db');
const Medicacao = require('./Medicacao');
const Paciente = require('./Paciente');

const PacienteMedicacao = db.sequelize.define('paciente-medicacoes', {
	dosagem: {
		type: db.Sequelize.REAL
    },
    
	frequencia: {
		type: db.Sequelize.INTEGER
    },
    
	receita: {
		type: db.Sequelize.STRING
	},

	prescricao: {
		type: db.Sequelize.STRING
    },
    
    duracao: {
		type: db.Sequelize.INTEGER
	},

	continuo: {
		type: db.Sequelize.BOOLEAN
	},

});

Paciente.belongsToMany(Medicacao, {through: PacienteMedicacao});
Medicacao.belongsToMany(Paciente, {through: PacienteMedicacao});

PacienteMedicacao.sync({force:true});

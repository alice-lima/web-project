const db = require('./db');

const Receita = db.sequelize.define('receitas', {
	idReceita: {
        type:db.Sequelize.INTEGER,
        primaryKey: true,
        autoIncrement: true
    },
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


module.exports = Receita;
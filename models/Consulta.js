const db = require('./db');

const Consulta = db.sequelize.define('consultas', {
    idConsulta: {
        type:db.Sequelize.INTEGER,
        primaryKey: true,
        autoIncrement: true
    },
	data: {
		type: db.Sequelize.STRING
    },
    
	hora: {
		type: db.Sequelize.STRING
    },

});


module.exports = Consulta;
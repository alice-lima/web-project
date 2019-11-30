const db = require('./db');

const Consulta = db.sequelize.define('consultas', {
    data: {
		type: db.Sequelize.STRING
    },
    
	hora: {
		type: db.Sequelize.STRING
    },

});


module.exports = Consulta;
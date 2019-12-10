const db = require('./db');

const Retorno = db.sequelize.define('retorno', {
    data: {
        type: db.Sequelize.STRING,
    },
    hora: {
        type: db.Sequelize.STRING,
    },
});

module.exports = Retorno;
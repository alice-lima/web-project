const Medicacao = require('./Medicacao');
const Paciente = require('./Paciente');
const Receita = require('./Receita');
const Medico = require('./Medico');
const Consulta = require('./Consulta');
const Retorno = require('./Retorno');

function criarTabelas() {
    
    Paciente.belongsToMany(Medicacao, {through: Receita});
    Medicacao.belongsToMany(Paciente, {through: Receita});
    Paciente.belongsToMany(Medico, {through: Consulta});
    Medico.belongsToMany(Paciente, {through: Consulta});
    Paciente.hasMany(Retorno);
    Medico.hasMany(Retorno);
    Retorno.belongsTo(Paciente);
    Retorno.belongsTo(Medico);

    return {
            Medico: Medico,
            Paciente: Paciente,
            Medicacao: Medicacao,
            Receita: Receita,
            Consulta: Consulta,
            Retorno: Retorno
    };

}

module.exports = criarTabelas();

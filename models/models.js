const Medicacao = require('./Medicacao');
const Paciente = require('./Paciente');
const Receita = require('./Receita');
const Medico = require('./Medico');
const Consulta = require('./Consulta');

//para criar as tabelas descomentar os códigos comentados

//criação das tabelas pacientes, medicacoes e paciente-medicacoes
Paciente.belongsToMany(Medicacao, {through: Receita});
Medicacao.belongsToMany(Paciente, {through: Receita});
//Paciente.sync({force:true});
//Medicacao.sync({force:true});
//Receita.sync({force:true});

//criação da tabela medicos e consultas 
Paciente.belongsToMany(Medico, {through: Consulta});
Medico.belongsToMany(Paciente, {through: Consulta});
//Consulta.sync({force:true});
//Medico.sync(({force:true}));

const models = {
    Medico: Medico,
    Paciente: Paciente,
    Medicacao: Medicacao,
    Receita: Receita,
    Consulta: Consulta
};

module.exports = models;

const Medicacao = require('./Medicacao');
const Paciente = require('./Paciente');
const PacienteMedicacao = require('./PacienteMedicacao');
const Medico = require('./Medico');
const Consulta = require('./Consulta');

//criação das tabelas pacientes, medicacoes e paciente-medicacoes
Paciente.belongsToMany(Medicacao, {through: PacienteMedicacao});
Medicacao.belongsToMany(Paciente, {through: PacienteMedicacao});
//Paciente.sync({force:true});
//Medicacao.sync({force:true});
//PacienteMedicacao.sync({force:true});

//criação da tabela medicosdo   
Paciente.belongsToMany(Medico, {through: Consulta});
Medico.belongsToMany(Paciente, {through: Consulta});
Consulta.sync({force:true});
//Medico.sync(({force:true}));

const models = {
    Medico: Medico,
    Paciente: Paciente,
    Medicacao: Medicacao,
    PacienteMedicacao: PacienteMedicacao
};

module.exports = models;

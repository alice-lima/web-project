const Medicacao = require('./Medicacao');
const Paciente = require('./Paciente');
const PacienteMedicacao = require('./PacienteMedicacao');
const Medico = require('./Medico');

//criação das tabelas pacientes, medicacoes e paciente-medicacoes
Paciente.belongsToMany(Medicacao, {through: PacienteMedicacao});
Medicacao.belongsToMany(Paciente, {through: PacienteMedicacao});
//Paciente.sync({force:true});
//Medicacao.sync({force:true});
//PacienteMedicacao.sync({force:true});

//criação da tabela medicos
//Medico.sync(({force:true}));

const models = {
    Medico: Medico,
    Paciente: Paciente,
    Medicacao: Medicacao,
    PacienteMedicacao: PacienteMedicacao
};

module.exports = models;

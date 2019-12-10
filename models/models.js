const Medicacao = require('./Medicacao');
const Paciente = require('./Paciente');
const Receita = require('./Receita');
const Medico = require('./Medico');
const Consulta = require('./Consulta');
const Retorno = require('./Retorno');


//para criar as tabelas descomentar os códigos comentados
//async function criarTabelas() {
    function criarTabelas() {
//  criação das tabelas pacientes, medicacoes e paciente-medicacoes
    Paciente.belongsToMany(Medicacao, {through: Receita});
    Medicacao.belongsToMany(Paciente, {through: Receita});
//    await Paciente.sync({force:true});
//    await Medicacao.sync({force:true});


    //criação da tabela medicos e consultas 
    Paciente.belongsToMany(Medico, {through: Consulta});
    Medico.belongsToMany(Paciente, {through: Consulta});

 //   await Medico.sync(({force:true}));
 //   Receita.sync({force:true});
 //   Consulta.sync({force:true});
    Paciente.hasMany(Retorno);
    Medico.hasMany(Retorno);
    Retorno.belongsTo(Paciente);
    Retorno.belongsTo(Medico);

    //Retorno.sync({force:true});

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

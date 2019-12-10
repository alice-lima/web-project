const models = require("../models/models");
const Paciente = models.Paciente;

module.exports = {
    async create(req) {
        const paciente = {
            nome: req.body.nome,
            cpf: req.body.cpf,
            dataNasc: req.body.dataNasc,
            natCidade: req.body.natCidade,
            natEstado: req.body.natEstado,
            natPais: req.body.natPais,
            cep: req.body.cep,
            cidade: req.body.cidade,
            estado: req.body.estado,
            logradouro: req.body.logradouro,
            numero: req.body.numero,
            complemento: req.body.complemento,
            telResidencial: req.body.telResidencial,
            telComercial: req.body.telComercial,
            telCelular: req.body.telCelular,
            telOutro: req.body.telOutro
        }

        await Paciente.create(paciente);
    },

    async findByPrimary(id) {
        const paciente = await Paciente.findOne({
            where: {
                id: id
            }
        })

        return paciente;
    },

    async findByName(req) {
        const paciente = await Paciente.findOne({
            where: {
                nome: req.query.nome
            }
        });
        return paciente;
    }
}
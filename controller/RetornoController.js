const models = require("../models/models");
const Retorno = models.Retorno;

module.exports = {
    async create (req) {
        const retorno = {
            data: req.body.data,
            hora: req.body.hora,
            pacienteId: req.body.pacienteId,
            medicoId: req.body.medicoId
        }

        await Retorno.create(retorno);
    }
}
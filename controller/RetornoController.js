const models = require("../models/models");
const Retorno = models.Retorno;

module.exports = {
    async create (req) {
        const medico = JSON.parse(req.body.medicoId)
        const retorno = {
            data: req.body.data,
            hora: req.body.hora,
            pacienteId: parseInt(req.body.pacienteId),
            medicoId: medico.id
        }
        console.log("create no controller")
        console.log(medico)
        await Retorno.create(retorno);
    }
}
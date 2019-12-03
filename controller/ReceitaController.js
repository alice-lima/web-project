const models = require("../models/models");
const Receita = models.Receita;

exports.module = {
    async create(req, medicacaoId) {
        const receita = {
            dosagem: req.body.dosagem,
            frequencia: req.body.frequencia,
            duracao: req.body.duracao,
            continuo: req.body.continuo,
            emUso: req.body.emUso,
            prescricao: req.body.prescricao,
            receita: req.body.receita,
            pacienteId: req.body.pacienteId,
            medicacoId: medicacaoId
        }

    await Receita.create(receita);
    },

    async findByPrimary (pacienteId, medicacoId)
    {
        const receita = await Receita.findOne({
            where: {
                pacienteId: pacienteId,
                medicacoId: medicacoId
            }
        })

        return receita; 
    }


}
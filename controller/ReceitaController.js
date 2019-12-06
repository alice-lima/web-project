    const models = require("../models/models");
    const Receita = models.Receita;

module.exports = {
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

    async findByPrimary (pacienteId, medicacoId) {
        const receita = await Receita.findOne({
            where: {
                pacienteId: pacienteId,
                medicacoId: medicacoId
            }
        });

        return receita; 
    },

    async findByPaciente (pacienteId) {
        const receitas = await Receita.findAll({
            where: {
                pacienteId: pacienteId
            }
        });
        
        return receitas;
    },

    async delete (req) {
        await Receita.destroy({
            where: {
                pacienteId: req.query.pacienteId,
                medicacoId: req.query.medicacoId
            }
        });
    }
}
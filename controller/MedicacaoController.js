const models = require("../models/models");
const Medicacao = models.Medicacao;

module.exports = {
    async findMedPaciente (receitas) {
        
        console.log("Receitas: " + receitas);
        const medicacoes =[];
        for (const receita of receitas) {
            let medicacao = await Medicacao.findOne({where: {id: receita.dataValues.medicacoId}});
            console.log(medicacao);

            medicacoes.push(medicacao);
        }
        console.log("medicacoes" + medicacoes);
        return medicacoes;

         
    },

    async findByAtt(req) {
        const medicacao = await Medicacao.findOne({
            where : {
                classeTerapeutica: req.body.classeTerapeutica,
                viaAdministracao: req.body.viaAdministracao,
                unidade: req.body.unidade,
            }
        })
        return medicacao;
    },

    async findByPrimary(medicacoId){
       const medicacao = await Medicacao.findOne({
            where: {
                id: medicacoId
            }
        });
        return medicacao;

    }
    
}

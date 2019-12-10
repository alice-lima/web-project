const express = require("express");

const models = require("./models/models");
const MedicacaoController = require("./controller/MedicacaoController");
const ReceitaController = require("./controller/ReceitaController");
const PacienteController = require("./controller/PacienteController");
const MedicoController = require("./controller/MedicoController");
const ConsultaController = require("./controller/ConsultaController");

const routes = express.Router();

//rota da página inicial
routes.get("/", function(req, res) {
  res.render("index");
});

//rotas da página de login
routes.get("/NovoUsuario", function(req, res) {
  res.render("CadMedico", { titulo: "Login", endereco: "/" });
});

routes.get("/consultas", (req, res) => {
  res.send({ teste: "123" });
});
routes.post("/consultas", ConsultaController.store);
// routes.post("/consultas", (req, res) => {
//   res.send({ consulta: req.body });
// });

routes.post("/Login", function(req, res) {
  models.Medico.findOne({
    where: {
      usuario: req.body.usuario,
      senha: req.body.senha
    }
  }).then(medico => {
    if (medico) {
      res.render("Menu");
    } else {
      res.render("index", { erro: "Usuário não encontrado" });
    }
  });
});

//rotas da página menu

//rotas da página CadMedico
routes.post("/CadastrarMedico", function(req, res) {
  console.log(req.body);
  MedicoController.create(req)
    .then(function() {
      console.log("medico inserido com sucesso");
      res.render("Menu");
    })
    .catch(function(erro) {
      res.send("Houve um erro: " + erro);
    });
});

//rotas da página Paciente
routes.post("/CadastrarPaciente", function(req, res) {
  PacienteController.create(req)
    .then(() => {
      res.render("Menu");
    })
    .catch(function(erro) {
      res.send("Houve um erro: " + erro);
    });
});
//rotas padrao do header
routes.get("/Menu", function(req, res) {
  res.render("Menu");
});

routes.get("/CadastrarPaciente", function(req, res) {
  res.render("Paciente", { titulo: "Paciente" });
});

routes.get("/CadastrarMedico", function(req, res) {
  res.render("CadMedico", { titulo: "Médico" });
});

routes.get("/Consulta", function(req, res) {
  res.render("Consulta", { titulo: "Consulta" });
});

routes.get("/PesquisaPaciente", function(req, res) {
  models.Paciente.findOne({
    where: {
      nome: req.query.nome
    }
  }).then(paciente => {
    if (paciente) {
      ReceitaController.findByPaciente(paciente.dataValues.id).then(
        receitas => {
          MedicacaoController.findMedPaciente(receitas).then(medicacoes => {
            res.render("Consulta", {
              paciente: paciente.dataValues,
              receitas: receitas,
              medicacoes: medicacoes,
              titulo: "Consulta"
            });
          });
        }
      );
    } else {
      res.render("Menu");
    }
  });
});

//rotas da página Consulta
routes.post("/AddMedicacaoPaciente", function(req, res) {
  MedicacaoController.findByAtt(req).then(medicacao => {
    ReceitaController.findByPrimary(
      req.body.pacienteId,
      medicacao.dataValues.id
    )
      .then(receita => {
        if (receita) {
          /*var values = {
					dosagem: req.body.dosagem,
					frequencia: req.body.frequencia,
					duracao: req.body.duracao,
					continuo: req.body.continuo,
					emUso: req.body.emUso,
					prescricao: req.body.prescricao};
				var condition = { where :{
					pacienteId: receita.pacienteId,
					medicacoId: receita.medicacoId} };
				var options = { multi: true };
				
				models.Receita.update(values, condition , options); */
        } else {
          ReceitaController.create(req, medicacao.dataValues.id).then(() => {
            PacienteController.findByPrimary(req.body.pacienteId).then(
              paciente => {
                ReceitaController.findByPaciente(paciente.dataValues.id).then(
                  receitas => {
                    MedicacaoController.findMedPaciente(receitas).then(
                      medicacoes => {
                        let pacienteNome = paciente.dataValues.nome.replace(
                          " ",
                          "+"
                        );
                        console.log(pacienteNome);
                        res.redirect("/PesquisaPaciente?nome=" + pacienteNome);
                      }
                    );
                  }
                );
              }
            );
          });
        }
      })
      .catch(erro => {
        console.log("Houve um erro " + erro);
      });
  });
});

routes.delete("/ExcluirReceita", function(req, res) {
  ReceitaController.delete(req).then(() => {
    PacienteController.findByPrimary(req.body.pacienteId).then(paciente => {
      ReceitaController.findByPaciente(paciente.dataValues.id).then(
        receitas => {
          MedicacaoController.findMedPaciente(receitas).then(medicacoes => {
            res.render("Consulta", {
              paciente: paciente.dataValues,
              receitas: receitas,
              medicacoes: medicacoes,
              titulo: "Consulta"
            });
          });
        }
      );
    });
  });
});

routes.get("/LoucuraAdicionar", function(req, res) {
  models.Medicacao.create({
    classeTerapeutica: "Benzodiazepínicos",
    apresentacao: "",
    viaAdministracao: "Oral",
    unidade: "ml",
    posologia: ""
  })
    .then(() => {
      res.render("Menu");
    })
    .catch(erro => {
      console.log("Houve um erro: " + erro);
    });
});

module.exports = routes;

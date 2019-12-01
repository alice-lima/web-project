const express = require('express');
const router = express.Router();
const models = require('./models/models');
const Paciente = require('./controller/PacienteController');
const Receita = require('./controller/ReceitaController');

//rota da página inicial
router.get('/', function(req, res){
	res.render('index');
});

//rotas da página de login
router.get('/NovoUsuario', function(req, res){
	res.render('CadMedico', {titulo: "Login", endereco: "/"});
});

router.post('/Login', function(req, res){

	models.Medico.findOne({
		where: {
			usuario: req.body.usuario,
			senha: req.body.senha
		}
	}).then(project => {
		if(project)
		{
			res.render('Menu');
		}
		else
		{
			res.render("index", {erro: "Usuário não encontrado"});
		}
	})
});

//rotas da página menu

//rotas da página CadMedico
router.post('/CadastrarMedico', function(req, res){
	console.log(req.body)
	models.Medico.create({
		usuario: req.body.usuario,
		senha: req.body.senha,
		nome: req.body.nome,
		dataNasc: req.body.dataNasc,
		cpf: req.body.cpf,
		crm: req.body.crm,
		uf: req.body.uf,
		especialidade: req.body.especialidade,
		telResidencial: req.body.telResidencial,
		telCelular: req.body.telCelular,
		telOutro: req.body.telOutro
	}).then(function(){
		console.log("medico inserido com sucesso");
		res.render('Menu');
	}).catch(function(erro){
		res.send("Houve um erro: " + erro);
	})
});

//rotas da página Paciente
router.post('/CadastrarPaciente', function(req, res){
	Paciente.create(req, res).then(() => {
		res.render("Menu");
	}).catch(function(erro){
		res.send("Houve um erro: " + erro);
	})
});
//rotas padrao do header
router.get('/Menu', function(req, res){
	res.render('Menu');
});

router.get('/CadastrarPaciente', function(req, res){
	res.render('Paciente', {titulo: "Paciente"});
});

router.get('/CadastrarMedico', function(req, res){
	res.render('CadMedico', {titulo: "Médico"});
});

router.get('/Consulta', function(req, res){
	res.render('Consulta', {titulo: "Consulta"});
});

router.get('/PesquisaPaciente', function(req, res){
	models.Paciente.findOne({
		where: {
			nome: req.query.nome
		}
	}).then(project => {
		console.log(project.dataValues.nome);

		if(project)
		{
			res.render('Consulta', {dados: project.dataValues, titulo: 'Consulta'});
		}
		else
		{
			res.render("Menu");
		}		
	})
});

//rotas da página Consulta
router.post('/AddMedicacaoPaciente', function(req, res){
	console.log(req.body.continuo);
	models.Medicacao.findOne({
		where : {
			classeTerapeutica: req.body.classeTerapeutica,
			viaAdministracao: req.body.viaAdministracao,
			unidade: req.body.unidade,
		}
	}).then(medicacao => {
		console.log(medicacao);
		models.Receita.findOne({
			where: {
				pacienteId: req.body.pacienteId,
				medicacoId: medicacao.dataValues.id,
			},
			limit: 1
		}).then(receita => {
			console.log("update");
			if(receita){

			} else {
				Receita.create(req, medicacao.dataValues.id);
			}
			models.Paciente.findOne({where: {id: req.body.pacienteId}}).then(paciente => {
				url="/PesquisaPaciente?nome=" + paciente.nome;
				console.log("Url: " + url);
				res.redirect(url);
			});
		}).catch(erro => {
			console.log("Houve um erro " + erro);
		})
	})
});


router.get('/LoucuraAdicionar', function(req, res){
	models.Medicacao.create({
		classeTerapeutica: "Antidepressivos",
		apresentacao: "",
		viaAdministracao: "Inalatória",
		unidade: "Comprimido",
		posologia: "",
	}).then(() => {
		res.render("Menu");
	}).catch(erro => {
		console.log("Houve um erro: " + erro);
	})
});


module.exports = router;

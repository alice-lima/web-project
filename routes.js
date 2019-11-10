const express = require('express');
const router = express.Router();
const models = require('./models/models');

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
router.post('/CadPaciente', function(req, res){
	models.Paciente.create({
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
	}).then(function(){
		console.log("Paciente cadastrado com sucesso");
		res.render("Paciente");
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
	res.render('CadMedico', {titulo: "Médico", titulo2: "Menu", endereco: "/Menu"});
});

router.get('/Consulta', function(req, res){
	res.render('Consulta', {titulo: "Consulta"});
});

router.get('/PesquisaPaciente', function(req, res){
	res.render('Consulta');
});



module.exports = router;

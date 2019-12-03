const express = require('express');
const router = express.Router();
const models = require('./models/models');
const MedicacaoController = require('./controller/MedicacaoController')
console.log(models);
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
	console.log(req.body.pacienteNome);

	models.Paciente.findOne({
		where: {
			nome: req.query.nome
		}
	}).then(paciente => {
		if(paciente) {
			models.Receita.findAll({
				where: {
					pacienteId: paciente.dataValues.id
				}
			}).then((receitas) => {
				MedicacaoController.findMedPaciente(receitas).then((medicacoes) => {
					res.render('Consulta', {dados: paciente.dataValues, receitas: receitas, medicacoes: medicacoes, titulo: 'Consulta'});
				})
				
			})
		}
		else {
			res.render("Menu");
		}		
	})
});

//rotas da página Consulta
router.post('/AddMedicacaoPaciente', function(req, res){
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
			if(receita){
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

				//nem todos os dados sao inseridos
				models.Receita.create({
					dosagem: req.body.dosagem,
					frequencia: req.body.frequencia,
					duracao: req.body.duracao,
					continuo: req.body.continuo,
					emUso: req.body.emUso,
					prescricao: req.body.prescricao,
					receita: req.body.receita,
					pacienteId: req.body.pacienteId,
					medicacoId: parseInt(medicacao.dataValues.id)
				});
			}
			//query construida incorretamente
			models.Paciente.findOne({where: {id: req.body.pacienteId}}).then(paciente => {
				res.render("Consulta", {paciente: paciente.dataValues, titulo: "Consulta"});
			});
		}).catch(erro => {
			console.log("Houve um erro " + erro);
		})
	})
});


router.get('/LoucuraAdicionar', function(req, res){
	models.Medicacao.create({
		classeTerapeutica: "Hipolipemiantes",
		apresentacao: "",
		viaAdministracao: "Oral",
		unidade: "ml",
		posologia: "",
	}).then(() => {
		res.render("Menu");
	}).catch(erro => {
		console.log("Houve um erro: " + erro);
	})
});


module.exports = router;

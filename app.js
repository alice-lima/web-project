const express = require('express');
const bodyParser = require('body-parser');
const Medico = require('./models/Medico');
const Paciente = require('./models/Paciente');

const app = express();

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended: true}));

app.set('view engine', 'ejs');
app.set('views', './views');
app.use(express.static('views'));

app.get('/', function(req, res){
	res.render('index');
});
app.get('/CadMedico', function(req, res){
	res.render('CadMedico', {titulo: "Login", endereco: "/"});
});
app.post('/Login', function(req, res){

	Medico.findOne({
		where: {
			usuario: req.body.usuario,
			senha: req.body.senha
		}
	}).then(project => {
		if(project)
		{
			res.render("CadMedico", {titulo: "Início", endereco: "/Menu"});
		}
		else
		{
			res.render("index", {erro: "Usuário não encontrado"});
		}
	})
});
app.post('/CadMedico', function(req, res){
	console.log(req.body)
	Medico.create({
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
		res.render("CadMedico", {titulo: "Login", endereco: "/"});
	}).catch(function(erro){
		res.send("Houve um erro: " + erro);
	})
});

app.get('/CadPaciente', function(req, res){
	res.render('Paciente');
});


app.post('/CadPaciente', function(req, res){
	Paciente.create({
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

app.get('/Menu', function(req, res){
	res.render('Menu');
});


app.listen(8080, function(){
	console.log("Servidor rodando na porta 8080");
})

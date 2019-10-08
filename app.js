const express = require('express');
const bodyParser = require('body-parser');
const Medico = require('./models/Medico');

const app = express();

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended: true}));

app.set('view engine', 'ejs');
app.set('views', './views');
app.use(express.static('views'));

app.get('/', function(req, res){
	res.render('index');
});
app.post('/Paciente', function(req, res){

	Medico.findOne({
		where: {
			usuario: req.body.usuario,
			senha: req.body.senha
		}
	}).then(project => {
		if(project)
		{
			res.render("CadMedico");
		}
		else
		{
			res.render("index", {erro: "Usuário não encontrado"});
		}
	})
});
app.post('/CadMedico', function(req, res){
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
		res.render('CadMedico');
	}).catch(function(erro){
		res.send("Houve um erro: " + erro);
	})
});

app.listen(8080, function(){
	console.log("Servidor rodando na porta 8080");
})

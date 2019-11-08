const express = require('express');
const bodyParser = require('body-parser');

const app = express();

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended: true}));
app.use(require('./routes'))


app.set('view engine', 'ejs');
app.set('views', './views');
app.use(express.static('views'));

app.listen(8080, function(){
	console.log("Servidor rodando na porta 8080");
})

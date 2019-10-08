
var express = require('express');
var bodyParser = require('body-parser');
var criardorModelos = require('./models/criadorModels');

var app = express();

app.set('view engine', 'ejs');
app.set('views', './views');
app.use(express.static('views'));

app.get('/', function (req, res) {
  res.render('index');
});

app.listen(3000, function () {
  console.log('Example app listening on port 3000!');
});


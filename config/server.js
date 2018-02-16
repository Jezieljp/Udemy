// pasta de configuração do servido
//execuntando a bliblioteca express
var express = require('express');
var consign = require('consign');
var bodyParser = require('body-parser');
var expressValidator = require('express-validator');

//execuntando a função express
var app = express();
//chamanda  ejs para que posamos faser paginas dinamicas com html
app.set('view engine', 'ejs');
// configurando os caminhos das views
app.set('views', './app/views');

//executando body-parser
app.use(bodyParser.urlencoded({ extended: true }));
//chamado o express-validator aula 44 instando o express-validator
app.use(expressValidator());

//execultando modulo consign
consign()
    .include('app/routes')
    .then('config/dbConnection.js')//fazendo conexao com banco de dados com consign
    .then('app/models')//pegando nosso models 
    .into(app);

// retornando nossa variavel
module.exports = app;
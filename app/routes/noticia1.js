//chamando a conexão com banco
//var dbConnection = require('../../config/dbConnection');
// criando rotas de noticias
// chamando a pagina noticia
module.exports = function (app) {
    // execuntando a função dbConnection      
    //var connection = dbConnection();       
    app.get('/noticia', function (req, resp) {

        //fazendo conexao com bancode dados 
        //criando rota pra pegar paginas noticia 
        var connection = app.config.dbConnection();
        var noticiasModel = app.app.models.noticiasModel;//caminho da pagina numa variavel

        noticiasModel.getNoticia1(connection, function (error, result) {
            resp.render("noticias/noticia", { noticia: result });//recunperar o modulo e acessar a função do arquivos noticiasModel
        });
    });
};

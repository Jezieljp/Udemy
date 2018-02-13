//chamando a conexão com banco
//var dbConnection = require('../../config/dbConnection');
// criando rotas de noticias
// chamando a pagina noticia
module.exports = function (app) {
    // execuntando a função dbConnection      
  
    app.get('/noticias', function (req, resp) {
        var connection = app.config.dbConnection();
        //fazendo conexao com bancode dados  
        connection.query('select * from noticias', function (error, result) {
            
            // var noticiasModel = app.app.models.noticiasModel;
            //noticiasModel.getNoticias(connection, function (error, result) {

            resp.render("noticias/noticias", { noticias: result });
        });
    });
};
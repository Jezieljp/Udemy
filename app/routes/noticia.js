//chamando a conexão com banco
//var dbConnection = require('../../config/dbConnection');
// criando rotas de noticias
// chamando a pagina noticia
module.exports = function (app) {
    // execuntando a função dbConnection      
  
    app.get('/noticias', function (req, resp) {

        var connection = app.config.dbConnection();
        var NoticiasDados = new app.app.models.NoticiasDados(connection);
        //fazendo conexao com bancode dados  
        //connection.query('select * from noticias', function (error, result) {            
            
            NoticiasDados.getNoticias(function (error, result) {
            resp.render("noticias/noticias", { noticias: result });
        });
    });
};
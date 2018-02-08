//chamando a conexão com banco
//var dbConnection = require('../../config/dbConnection');
// criando rotas de noticias
// chamando a pagina noticia
module.exports = function (app) {
    // execuntando a função dbConnection      
    //var connection = dbConnection();       
    app.get('/noticias', function (req, resp) {

        //fazendo conexao com bancode dados  
        var connection = app.config.dbConnection();
        var noticiasModel = app.app.models.noticiasModel;
        
        noticiasModel.getNoticias(connection, function (error, result) {
            //console.log(result);
            //console.log(error);
            resp.render("noticias/noticia", { noticias: result });
        });

    });
    //funcionou

};
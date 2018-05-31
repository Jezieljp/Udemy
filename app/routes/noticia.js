//chamando a conexão com banco
//var dbConnection = require('../../config/dbConnection');
// criando rotas de noticias
// chamando a pagina noticia
module.exports = function (app) {
    // execuntando a função dbConnection      
  
    app.get('/noticias', function (req, resp) {
        app.app.controllers.noticias.noticias(app, req, resp);       
    });
     // execuntando a função dbConnection      
    //var connection = dbConnection();       
    app.get('/noticia', function (req, resp) {
        app.app.controllers.noticias.noticia(app, req, resp);

    });
};
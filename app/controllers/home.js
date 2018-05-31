module.exports.index = function (app, req, resp) {
    //implentando o back-end da index para pegar 5 ultimas noticias
    //conexao com o banco de dados
    var connection = app.config.dbConnection();
    var noticiasModel = new app.app.models.NoticiasDados(connection);

    //implementado umafuncao para recunperar ultimas noticias va no models.js
    noticiasModel.get5UltimasNoticias(function(error, result){   
        console.log(result);
        resp.render("home/index");
    });
 
}
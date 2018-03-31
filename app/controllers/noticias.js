module.exports.noticias = function (app, req, resp) {

    // execuntando a função dbConnection    
    var connection = app.config.dbConnection();
    var NoticiasDados = new app.app.models.NoticiasDados(connection);
    //fazendo conexao com bancode dados  
    //connection.query('select * from noticias', function (error, result) {            

    NoticiasDados.getNoticias(function (error, result) {
        resp.render("noticias/noticias", { noticias: result });
    });

}

module.exports.noticia = function (app, req, resp) {


    //fazendo conexao com bancode dados 
    //criando rota pra pegar paginas noticia 
    var connection = app.config.dbConnection();
    var noticiasModel = new app.app.models.NoticiasDados(connection);//caminho da pagina numa variavel

    noticiasModel.getNoticia1(function (error, result) {
        resp.render("noticias/noticia", { noticia: result });//recunperar o modulo e acessar a função do arquivos noticiasModel
    });

}
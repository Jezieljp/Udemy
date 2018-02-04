// criando as rotas do formulario
// chamando formulario
module.exports = function(app) {
	app.get('/formulario_inclusao_noticia', function(req, resp){	
		resp.render("admin/form_add_noticia");
	});
	//Recenbendo formulario POST com Body_parser Aula 38
	app.post('/noticias/salvar', function(req, resp){
		var noticia = req.body;	
		//resp.send(noticia);		
		//resp.render("admin/form_add_noticia");
		// Inserindo registro no banco MySQL aula 39
		   //fazendo conexao com bancode dados 
        //criando rota pra pegar paginas noticia 
        var connection = app.config.dbConnection();
        var noticiasModel = app.app.models.noticiasModel;//caminho da pagina numa variavel

         noticiasModel.salvarNoticia(noticia, connection, function (error, result) {//va no model e faça a funçao pra recuperar as noticia
			console.log(result);
			console.log(error);
			resp.render("noticias/noticia", {noticia: result});//recunperar o modulo e acessar a função do arquivos noticiasModel
         });
	});
};
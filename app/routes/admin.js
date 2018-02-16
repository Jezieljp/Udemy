// criando as rotas do formulario
// chamando formulario
module.exports = function(app) {
	app.get('/formulario_inclusao_noticia', function(req, resp){	
		resp.render("admin/form_add_noticia");
	});
	//Recenbendo formulario POST com Body_parser Aula 38
	app.post('/noticias/salvar', function(req, resp){
		var noticia = req.body;
		
		//Criando uma validacao para os campos do form
	    
		req.assert('titulo', 'Campo Obrigatorio').notEmpty();		
		req.assert('resumo', 'Campo Obrigatorio').notEmpty();
		req.assert('autor', 'Campo Obrigatorio').notEmpty();
		//validando quantas letras pode no campo
		req.assert('autor', 'Campo no minimo de 5 a 10 caracteres').len(5, 10);
		req.assert('data_noticia', 'Campo Obrigatorio').notEmpty().isDate({format: 'YYYY-MM-DD'});

		var erros = req.validationErrors();//getValidationResult();//validationErrors();
		
		if(erros){
			resp.render("admin/form_add_noticia");
			return;
		}
			
	
		// Inserindo registro no banco MySQL aula 39
		   //fazendo conexao com bancode dados 
        //criando rota pra pegar paginas noticia 
        var connection = app.config.dbConnection();
        var noticiasModel = new app.app.models.NoticiasDados(connection);//caminho da pagina numa variavel
		noticiasModel.salvarNoticia(noticia, function (error, result) {//va no model e faça a funçao pra recuperar as noticia
			resp.redirect('/noticias');
			//resp.render("noticias/noticias", {noticias: result});//recunperar o modulo e acessar a função do arquivos noticiasModel
         });
	});
};

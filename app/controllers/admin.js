module.exports.formulario_inclusao_noticia = function(app, req, resp){
    resp.render("admin/form_add_noticia", {validacao : {}, noticia : {}});
}

//chamando salvar noticias Recenbendo formulario POST com Body_parser Aula 38
module.exports.noticias_salvar = function(app, req, resp){
    var noticia = req.body;
		
		//Criando uma validacao para os campos do form
	    
		req.assert('titulo', 'Campo Obrigatorio').notEmpty();		
		req.assert('resumo', 'Campo Obrigatorio').notEmpty();
		req.assert('autor', 'Campo Obrigatorio').notEmpty();
		//validando quantas letras pode no campo
		req.assert('autor', 'Campo no minimo de 5 a 20 caracteres').len(5, 20);
		req.assert('data_noticia', 'Campo Obrigatorio').notEmpty().isDate({format: 'YYYY-MM-DD'});

		var erros = req.validationErrors();
		
		if(erros){
												//aula 45 Validacao
			resp.render("admin/form_add_noticia", {validacao : erros, noticia : noticia});
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
}
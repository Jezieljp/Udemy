// criando as rotas do formulario
// chamando formulario
module.exports = function (app) {
	app.get('/formulario_inclusao_noticia', function (req, resp) {
		app.app.controllers.admin.formulario_inclusao_noticia(app, req, resp);
	});
	//Pegando so as rotas
	app.post('/noticias/salvar', function (req, resp) {
		app.app.controllers.admin.noticias_salvar(app, req, resp);


	}
	)
};

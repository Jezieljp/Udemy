//chamando a pagina html tecnologia 
//criando as rotas dos module
module.exports = function(app){
      app.get('/', function(req, resp){
	resp.render("home/index");
    });
};

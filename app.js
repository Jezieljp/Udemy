// chamando as configuração do servido
var app = require('./config/server');

// chamando o arquivo noticia
//var rotaNoticias = require('./app/routes/noticia');//(app)segundo mdo de faser
//rotaNoticias(app);
// chamando o arquivo home
//var rotaHome = require('./app/routes/home');
//rotaHome(app);

//var rotaFormulario = require('./app/routes/formulario_inclusao_noticia');
//rotaFormulario(app);

app.listen(3000, function(){
	console.log('SERVIDO FUNCIONANDO!!!');
});

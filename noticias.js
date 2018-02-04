// CRIANDO UMA REQUISIÇÃO HTTP
var http = require('http');

var server = http.createServer(function(req, resp){

var categoria = req.url;

if(categoria == '/tecnologia'){
	resp.end("<html><body>Portal de Tecnologia</body></html>");

} else if (categoria == '/moda'){
	resp.end("<html><body>Portal de Moda</body></html>");

} else if(categoria == '/beleza'){
	resp.end("<html><body>Portal de Beleza</body></html>");

} else {
	resp.end("<html><body>Portal de Noticias</body></html>");
}

});

server.listen(3000);
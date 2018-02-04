// conexão com banco de dados
var mysql = require('mysql');
var connMySQL = function() {
	return mysql.createConnection({
		host: 'localhost',
		user: 'root',
		password: '1234',
		database: 'portal_noticias'
	});
}
module.exports = function () {
	console.log('ok conecçao estabelecida');
	return connMySQL;
}
//criando uma função para que a variavel connection nao se repita dentro das função
function NoticiasDados(connection){
    this._connection = connection;
}

NoticiasDados.prototype.getNoticia1 = function (callback) {
    this._connection.query('select * from noticias where id_noticia = 1', callback);
}
//pegando dados do banco
NoticiasDados.prototype.getNoticias = function (callback) {
    this._connection.query('select * from noticias', callback);
}
 // Inserindo dados no banco de um form
 NoticiasDados.prototype.salvarNoticia = function(noticia, callback) {
    
    this._connection.query('insert into noticias set ?', noticia, callback)
}

module.exports = function () {   
    
    return NoticiasDados;
}
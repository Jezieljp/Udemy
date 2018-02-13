module.exports = function () {

    this.getNoticia1 = function (connection, callback) {
        connection.query('select * from noticias where id_noticia = 1', callback);
    }
    //pegando dados do banco 
    this.getNoticias = function (connection, callback) {
        connection.query('select * from noticias', callback);
    }
    // Inserindo dados no banco de um form
    this.salvarNoticia = function(noticia, connection, callback) {
        connection.query('insert into noticias set ?', noticia, callback)
    }
    return this;
}
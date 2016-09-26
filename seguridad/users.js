var connection = require('../connection');

console.log("Inicio");

// Buscar un registro, en este coso por el campo ID
exports.findById = function(req, res) {
    console.log("findById");
    connection.acquire(function(err, con) {
      con.query('select * from users', function(err, result) {
        con.release();
        res.send(result);
      });
    });
};

// Listar todos los elementos de la colexión
exports.findAll =   function(req, res) {
    console.log("findAll");
    connection.acquire(function(err, con) {
      con.query('select * from users', function(err, result) {
        con.release();
        res.send(result);
      });
    });
};

// Buscar un registro, en este coso por el campo ID
exports.findByLogin = function(req, res) {
    var login = req.params.login;
    console.log("findByLogin");
    connection.acquire(function(err, con) {
      con.query('select * from users where login=?', [login], function(err, result) {
        con.release();
        res.send(result);
      });
    });
};
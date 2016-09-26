var express = require('express'),
users = require('./seguridad/users');
var connection = require('./connection');
 
var app = express();

connection.init();

app.get('/seguridad/users/get', users.findAll);
//app.get('/seguridad/users/get/:login', users.findByLogin);
//app.get('/seguridad/users/:id', users.findById);
app.get('/seguridad/users/:login', users.findByLogin);
 
//app.listen(process.env.PORT);
//console.log('Servidor en el puerto ' + process.env.PORT + '...');

app.listen(8081);
console.log('Servidor en el puerto 8081...');
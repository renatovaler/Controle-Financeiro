var http = require('http');
var app = require('./config/express');
var database = require('./config/database');

var porta = 3000;

database('mongodb://localhost/controlefinanceiro');


http.createServer(app)
    .listen(porta, function(){
      console.log('Serviço iniciado na porta ' + porta)
    });

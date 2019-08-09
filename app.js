//Cargamos express, boy-parser y method-override
var express = require('express');
var bodyParser = require('body-parser');
var methodOverride = require('method-override');

//Iniciamos express
var app = express();

//importamos las rutas de la api
var book_routes = require('./routes/books');

//Configuramos body-parser y method-override
app.use(bodyParser.urlencoded({extended:false}));
app.use(bodyParser.json());
app.use(methodOverride());

//Cargamos las rutas
app.use('/rest_api_crud', book_routes);

//Exportamos el modulo para usarlo fuera del archivo
module.exports = app;
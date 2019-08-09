//Cargamos express para poder crear las rutas
var express = require('express');

//Cargamos el controlador
var BooksController = require('../controllers/books');

//Lamamos al Router
var api = express.Router();

//cargamos el middleware
//var md_auth = require('../middlewares/authenticated.js');

//Creamos las rutas que no necesiten ID
api.route('/books') 
	.get(BooksController.findAllBooks)
 	.post(BooksController.addBook);

//Creamos las rutas que neciten ID
api.route('/books/:id') 
	.get(BooksController.findBookById)
	.put(BooksController.updateBook)
	.delete(BooksController.deleteBook);

//exportamos la configuracion
module.exports = api;

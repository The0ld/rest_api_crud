//Cargamos mongoose y el model
var mongoose = require('mongoose');
var Books = require('../models/books');

//Retorna todos los Books en la BD (GET)
exports.findAllBooks = function(req, res) {
	Books.find(function(err, books) {
		if(err) res.send(500, err.message);
		console.log('GET /books')
		res.status(200).jsonp(books);
	});
};

//Retorna un Book especifico segun su ID (GET)
exports.findBookById = function(req, res) {
	Books.findById(req.params.id, function(err, book) {
		if(err) return res.send(500, err.message);
		console.log('GET /Books/' + req.params.id);
		res.status(200).jsonp(book);
	});
};

//Inserta un nuevo Book en la BD (POST)
exports.addBook = function(req, res) {
	console.log('POST');
	console.log(req.body);
	//Instanceamos que tendra como atributo los datos que se guardaran de forma ordenada en base al esquema del model
	var books = new Books({
		title: req.body.title,
		description: req.body.description,
		year: req.body.year,
		genre: req.body.genre
	});
	books.save(function(err, books) {
		if(err) return res.send(500, err.message);
		res.status(200).jsonp(books);
	});
};

//Actualizamos un registro ya existente en la BD (PUT)
exports.updateBook = function(req, res) {
	Books.findById(req.params.id, function(err, book) {
		book.title = req.body.title;
		book.description = req.body.description;
		book.year = req.body.year;
		book.genre = req.body.genre;
		book.save(function(err) {
			if(err) return res.send(500, err.message);
			res.status(200).jsonp(client);
		});
	});
};

//Eliminamos un Book del registro (DELETE)
exports.deleteBook = function(req, res) {
	Books.findById(req.params.id, function(err, book) {
		book.remove(function(err) {
			if(err) return res.send(500, err.message);
			res.json({ message: 'Successfully deleted' });
		});
	});
};

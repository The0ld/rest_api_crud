//Cargamos mongoose
var mongoose = require('mongoose');

//Iniciamos el esquema
var Schema = mongoose.Schema;

//Creamos el objeto esquema y sus atributos
var booksSchema = new Schema ({
	title:{type: String},
	description:{type: String},
	year:{type: String},
	genre:{type: String, enum:['Drama', 'Fantasy', 'Sci-Fi', 'Comedy']}
});

module.exports = mongoose.model('Books', booksSchema);

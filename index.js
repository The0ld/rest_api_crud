//Cargamos el modulo de mongoose
var mongoose = require('mongoose');

//Cargamos la configuracion de app
var app = require('./app');

//Puerto del server
var port = 3000;

//Conexion promesa con mongoose
//mongoose.Promise = global.Promise;

//Realizamos la conexion con la BD
mongoose.connect('mongodb://localhost:27017/book_db', { useNewUrlParser: true }).then(() => {
	console.log("conexion realizada con exito");

	//crear servidor con nodejs
	app.listen(port, () => {
		console.log("Servidor corriendo en http://localhost:3000");
	});
}).catch(err => console.log(err));
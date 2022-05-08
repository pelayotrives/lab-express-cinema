//! Pasos para hacer un modelo:

//! 1.) Incluimos esto, el cual está desestructurado para acceder a la variable directamente (si no, haríamos algo tipo 'const Schema = mongoose.Schema' y luego declararíamos el mongoose.model() así).
const {Schema, model} = require("mongoose");

//! 2.) Creamos el Schema
const moviesSchema = new Schema({
  title: {
    type: String,
    required: true
  },
  director: {
    type: String
  },
  stars: {
    type: [String]
  },
  image: {
    type: String,
    default: 'https://imaginacionsonora.com/modules/iblog/img/post/default.jpg'
  },
  description: {
    type: String
  },
  showtimes: {
    type: [String]
  }
});

//! 3.) Creamos el Model
const MoviesModel = model('Movies', moviesSchema); // El argumento hace referencia al nombre interno del modelo que tendrá nuestro modelo.

//! 4.) Exportamos
module.exports = MoviesModel;
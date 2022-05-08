const { response } = require("express");
const express = require("express");
const router = express.Router();
const MoviesModel = require("../models/Movie.model.js");

/* GET home page */
router.get("/", (req, res, next) => res.render("index"));

// Home (index.hbs)
// Los get SIEMPRE empiezan con barras.
router.get("/index", (req, res, next) => {
  res.render("index");
});

// Movies (movies.hbs)
router.get("/movies", (req, res, next) => {
  // Quiero buscar las imágenes y nombres de las películas
  // Find busca sobre el Model entero, select sobre la propiedad.
  MoviesModel.find().select()
    .then( (response) => {
      console.log(response);
      // Los render NUNCA empiezan con barras.
      res.render("movies.hbs", {
        // Donde quiero que me muestre la información. Abrimos un segundo elemento y lo llamamos moviesList, el cual renderizará la respuesta en la vista que tratamos de renderizar.
        moviesList: response,
      });
    })
    .catch((err) => {
      console.log(err);
    });
});

// Ruta dinámica: detalles de cada película
router.get("/movies/:moviesId", (req, res, next) => {
    MoviesModel.findById(req.params.moviesId)
    .then( (response) => {
        console.log(response);
        res.render("movies-details.hbs", {
            moviesDetails: response
        })
    })
    .catch( (err) => {
        console.log(err);
    })
});

module.exports = router;

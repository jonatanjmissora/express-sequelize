// const moviesList = ["Batman", "Superman", "Aquaman", "Wonder Woman", "Flash", "Cyborg"]
let db = require('../database/models')
const { Op } = require('sequelize')

const moviesController = {
  index: async function (req, res) {
    try {
      const moviesList = await db.Movie.findAll()
      // return res.json(moviesList)
      return res.render("movies/movies", { title: "PELICULAS", moviesList });
    } catch (error) {
      console.log(error)
    }
  },
  show: async function (req, res) {
    try {
      const id = req.params.id
      const movie = await db.Movie.findByPk(id, {
        include: [ {association: "genre"}, {association: "actors"}]
      })
      // return res.json(movie)
      return res.render("movies/movie", { title: "PELICULA", movie });
    } catch (error) {
      console.log(error)
    }
  },

  showGenre: async function (req, res) {
    try {
      const id = req.params.id
      const genre = await db.Genre.findByPk(id, {
        include: [ {association: "movies"} ]
      })
      // return res.json(genre)
      return res.render("movies/movieGenre", { title: "GENERO", genre });
    } catch (error) {
      console.log(error)
    }
  },

  showActor: async function (req, res) {
    try {
      const id = req.params.id
      const actor = await db.Actor.findByPk(id, {
        include: [ {association: "movies"} ]
      })
      // return res.json(genre)
      return res.render("movies/movieActor", { title: "ACTOR", actor });
    } catch (error) {
      console.log(error)
    }
  },

  movieNew: function (req, res) {
    return res.render("movieNew", { title: "NEW" })
  },
  create: function (req, res) {
    // se utiliza express-session para almacenar datos entre vistas, y luego con un middleware, pasar el res.local al req.session para tenerlo en el navegador y usarlo en cualquier momento
    return res.redirect("/movies")
  },
  // result: function (req, res) {
  // const search = req.query.search
  // const moviesResult = moviesList.filter(movie => movie.toUpperCase().includes(search.toUpperCase()))
  // return res.render("moviesResult", { title: "SEARCH", search, moviesResult });
  // },
  result: async function (req, res) {
    try {
      const moviesList = await db.Movie.findAll({
        where: {
          title: { [Op.like]: `%${req.query.search}%` }
        }
      })
      // return res.json(moviesList)
      return res.render("movies/movies", { title: "PELICULAS", moviesList });
    } catch (error) {
      console.log(error)
    }
  },
}

module.exports = moviesController;
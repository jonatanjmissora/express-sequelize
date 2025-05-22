// const moviesList = ["Batman", "Superman", "Aquaman", "Wonder Woman", "Flash", "Cyborg"]
let db = require('../database/models')
let op = db.sequelize.Op

const moviesController = {
  index: async function (req, res) {
    try {
      const moviesList = await db.Movie.findAll()
      // return res.json(moviesList)
      return res.render("movies", { title: "PELICULAS", moviesList });
    } catch (error) {
      console.log(error)
    }
  },
  show: function (req, res) {
    const id = req.params.id
    return res.send(`Estamos en la pelicula con id: ${id}`);
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
        where: [{
          title: { [op.like]: `Batman` }
        }]
      })
      return res.json(moviesList)
      // return res.render("movies", { title: "PELICULAS", moviesList });
    } catch (error) {
      console.log(error)
    }
  },
}

module.exports = moviesController;
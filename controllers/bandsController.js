const bands = require("../db/bands");

const bandsController = {
  index: function (req, res) {
    const bandsList = bands
    return res.render("bands", { title: "BANDAS", bandsList });
  },
  show: function (req, res) {
    const bandsList = bands
    const id = req.params.id
    if (id > 0 && id <= bandsList.length) {
      const band = bandsList[id - 1]
      return res.render("band", { title: "BANDAS", band });
    }
    else {
      return res.send("No encontramos el número de banda que busca. Intente con otro número.");
    }

  },
  genero: function (req, res) {
    const genero = req.params.genero
    const bandsByGenero = bands.filter(band => band.genero === genero)
    return res.render("bandsgenero", { title: "GENERO", genero, bandsByGenero });
  },
}

module.exports = bandsController;
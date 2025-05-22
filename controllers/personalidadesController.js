const personalidades = require("../db/science");

const personalidadesController = {
  index: function (req, res) {
    return res.render("personalidades", { title: "PERSONALIDADES" });
  },
  heroes: function (req, res) {
    const heroesList = personalidades
    return res.render("heroes", { title: "HEROES", heroesList });
  },
  heroe: function (req, res) {
    const heroesList = personalidades
    if (parseInt(req.params.id, 10) > 0 && parseInt(req.params.id, 10) <= heroesList.length) {
      return res.render("heroe", { title: "DETALLE", heroe: heroesList[req.params.id - 1] });
    }
    else {
      return res.send("“No encontramos al científico indicado. Por favor, elija otro id”.");
    }
  },
  bio: function (req, res) {
    const heroesList = personalidades
    const id = req.params.id
    if (id > 0 && id <= heroesList.length) {
      const nombre = heroesList[id - 1].nombre
      const mensaje = req.params.ok === "ok"
        ? heroesList[id - 1].resenia
        : "Lamento que no desees saber más de mi :(."

      return res.render("heroebio", { title: "BIO", id, nombre, mensaje });
    }
    else {
      return res.send("No encontramos al científico indicado para mostrar su biografía.");
    }
  }
}

module.exports = personalidadesController;
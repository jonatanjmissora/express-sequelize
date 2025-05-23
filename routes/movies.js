var express = require('express');
var router = express.Router();
const moviesController = require("../controllers/moviesController")

/* GET home page. */
router.get('/', moviesController.index);

router.get('/id/:id', moviesController.show);

router.get('/genre/:id', moviesController.showGenre);

router.get('/actor/:id', moviesController.showActor);

router.get("/result", moviesController.result)

router.get("/movieNew", moviesController.movieNew)

router.post("/create", moviesController.create)

module.exports = router;
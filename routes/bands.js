var express = require('express');
var router = express.Router();
const bandsController = require("../controllers/bandsController")

/* GET home page. */
router.get('/', bandsController.index);

router.get('/:id', bandsController.show);

router.get('/genero/:genero', bandsController.genero);

module.exports = router;
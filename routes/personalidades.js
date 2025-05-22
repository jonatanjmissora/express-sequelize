var express = require('express');
var router = express.Router();
const personalidadesController = require("../controllers/personalidadesController")

/* GET home page. */
router.get('/', personalidadesController.index);

router.get('/heroes', personalidadesController.heroes);

router.get('/heroes/:id', personalidadesController.heroe);

router.get('/heroes/:id/bio/:ok?', personalidadesController.bio);

module.exports = router;
var express = require('express');
var router = express.Router();
var weathetCtrl = require("./../controllers/weatherController");

/* GET users listing. */
router.get('/weathers', weathetCtrl.getAll);

module.exports = router;

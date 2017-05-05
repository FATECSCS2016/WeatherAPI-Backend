var express = require('express');
var router = express.Router();
var weathetCtrl = require("./../controllers/stationController");

/* GET users listing. */
router.get('/stations', weathetCtrl.getAllStations);
router.get('/stations/:stationID', weathetCtrl.getOneStation);

module.exports = router;

/**
 * HTTP API endpoints.
 */

var express = require('express');
var predictionApi = require('./prediction');
var forecastApi = require('./forecast');

var router = express.Router();

// mounting APIs
router.use('/predictions', predictionApi);
router.use('/forecasts', forecastApi);

module.exports = router;

/**
 * HTTP API endpoints.
 */

var express = require('express');
var testApi = require('./test');
var predictionApi = require('./prediction');

var router = express.Router();

// mounting APIs
router.use('/tests', testApi);
router.use('/predictions', predictionApi);

module.exports = router;

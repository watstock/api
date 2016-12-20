/**
 * HTTP API endpoints.
 */

var express = require('express');
var predictionApi = require('./prediction');

var router = express.Router();

// mounting APIs
router.use('/predictions', predictionApi);

module.exports = router;

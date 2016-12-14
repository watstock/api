/**
 * HTTP API endpoints.
 */

var express = require('express');
var testApi = require('./test');

var router = express.Router();

// mounting APIs
router.use('/tests', testApi);

module.exports = router;

/**
 * HTTP Endpoints.
 */

var express = require('express');
var api = require('./api');

var router = express.Router();
router.use('/api', api);

/**
 * Healthcheck endpoint.
 */
router.get('/ping', (req, res) => {
  res.send();
});

module.exports = router;

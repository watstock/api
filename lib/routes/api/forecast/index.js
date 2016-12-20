/**
 * Forecast endpoints.
 */

var express = require('express');

var db = require('../../../db');
var getForecast = require('./get-forecast')(db);
var getForecastFromDate = require('./get-forecast-from-date')(db);

var router = express.Router();


/**
 * Get the most accurate predictions for symbol.
 */
router.get('/:symbol',
  getForecast
  );

/**
 * Get the most accurate predictions from specified date.
 */
router.get('/:symbol/:date',
  getForecastFromDate
  );

module.exports = router;

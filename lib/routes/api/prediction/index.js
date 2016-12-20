/**
 * Prediction endpoints.
 */

var express = require('express');

var db = require('../../../db');
var getPrediction = require('./get-prediction')(db);
var getPredictions = require('./get-predictions')(db);
var getPredictionsFromDate = require('./get-predictions-from-date')(db);

var router = express.Router();


/**
 * Get a prediction by id.
 */
router.get('/:id',
  getPrediction
  );

/**
 * Get the most accurate predictions for symbol.
 */
router.get('/:symbol',
  getPredictions
  );

/**
 * Get the most accurate predictions from specified date.
 */
router.get('/:symbol/:date',
  getPredictionsFromDate
  );

module.exports = router;

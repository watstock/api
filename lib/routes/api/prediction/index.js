/**
 * Prediction endpoints.
 */

var express = require('express');

var db = require('../../../db');
var getPrediction = require('./get-prediction')(db);
var getBestPrediction = require('./get-best-prediction')(db);
var getPredictionFromDate = require('./get-prediction-from-date')(db);

var router = express.Router();


/**
 * Get a prediction by id.
 */
router.get('/:id',
  getPrediction
  );

/**
 * Get the most accurate prediction for symbol.
 */
router.get('/best/:symbol',
  getBestPrediction
  );

/**
 * Get the most accurate prediction for symbol.
 */
router.get('/:date/:symbol',
  getPredictionFromDate
  );

module.exports = router;

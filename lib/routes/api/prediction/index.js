/**
 * Prediction endpoints.
 */

var express = require('express');

var db = require('../../../db');
var getPrediction = require('./get-prediction')(db);
var getBestPrediction = require('./get-best-prediction')(db);

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

module.exports = router;

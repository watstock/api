/**
 * Prediction endpoints.
 */

var express = require('express');

var db = require('../../../db');
var getPrediction = require('./get-prediction')(db);

var router = express.Router();


/**
 * Get a prediction by id.
 */
router.get('/:id',
  getPrediction
  );

module.exports = router;

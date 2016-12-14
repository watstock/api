/**
 * Test endpoints.
 */

var express = require('express');

var db = require('../../../db');
var getTest = require('./get-test')(db);

var router = express.Router();


/**
 * Get a test by id.
 */
router.get('/:id',
  getTest
  );

module.exports = router;

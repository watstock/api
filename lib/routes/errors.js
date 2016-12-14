/**
 * Default errors.
 */

var debug = require('debug')('watstock:api');

exports.notfound = (req, res) => {
  res.status(404).send({ message: 'Resource not found' });
};

exports.error = (err, req, res, next) => {
  debug(err.stack);
  res.status(500).send({ message: 'Internal Server Error' });
};

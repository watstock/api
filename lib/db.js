/**
 * Barrel file for db models.
 */


// env
if (!process.env.MONGODB_CONNECTION) {
  console.log('MONGODB_CONNECTION environment variable required.');
  process.exit(1);
}

var mongoose = require('mongoose');
mongoose.connect(process.env.MONGODB_CONNECTION);

exports.Test = require('./models/test');
exports.Prediction = require('./models/prediction');

/**
 * User.
 */

var mongoose = require('mongoose');

// Schema
var Schema = mongoose.Schema;

var predictionSchema = new Schema({
  'timestamp': Date,
  'date': String,
  'symbol': String,
  'history_from': String,
  'history_to': String,
  'features': [String],
  'timesteps': Number,
  'architecture': [Number],
  'dropout': Number,
  'batch_size': Number,
  'epochs': Number,
  'early_stopping_patience': Number,
  'prediction_dates': [String],
  'prediction': [Number],
  'prediction_models': [new Schema({
    'train_set': Number,
    'val_set': Number,
    'test_set': Number,
    'train_rmse': Number,
    'test_rmse': Number,
    'train_mae': Number,
    'test_mae': Number,
    'train_ape_max': Number,
    'test_ape_max': Number,
    'train_mape': Number,
    'test_mape': Number,
    'train_accuracy': Number,
    'test_accuracy': Number,
    'train_duration': Number,
  })],
  'prediction_accuracy': Number
});

// Indexes
predictionSchema.index({ symbol: 1, timestamp: -1 });
predictionSchema.index({ symbol: 1, date: 1, prediction_accuracy: -1 });

/**
 * Finds todays prediction with the most highest average accuracy.
 *
 * @param      {Function}  fn          Callback.
 */
predictionSchema.statics.getBestPrediction = function (symbol, date, fn) {

  var query = {
    symbol: symbol,
    date: date
  };

  this.findOne(query).sort({prediction_accuracy: -1}).exec(fn);
};

module.exports = mongoose.model('Prediction', predictionSchema);;

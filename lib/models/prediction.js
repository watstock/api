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
  'steps_ahead': Number,
  'architecture': [Number],
  'dropout': Number,
  'batch_size': Number,
  'epochs': Number,
  'early_stopping_patience': Number,
  'prediction_date': String,
  'prediction': Number,
  'model': new Schema({
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
  }),
  'accuracy': Number
}, { collection: 'prediction_models' });

// Indexes
predictionSchema.index({ symbol: 1, prediction_date: 1, prediction_accuracy: -1 });

/**
 * Finds the best predictions for specified symbol from the date.
 *
 * @param      {String}    symbol  Ticker symbol.
 * @param      {String}    date    Date to start search from.
 * @param      {Function}  fn      Callback.
 */
predictionSchema.statics.getPredictions = function (symbol, date, fn) {

  this.aggregate([
    { $match: {
        symbol: symbol,
        prediction_date: {$gte: date}
    }},
    { $sort: { prediction_accuracy: -1 }},
    { $group: {
        _id: "$prediction_date",
        prediction_id: { $first: "$_id" },
        prediction_date: {$first: "$prediction_date" },
        prediction: { $first: "$prediction" },
        accuracy: { $first: "$accuracy" }
    }},
    { $sort: {_id: 1} }
  ], fn);

};

module.exports = mongoose.model('Prediction', predictionSchema);;

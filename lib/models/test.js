/**
 * User.
 */

var mongoose = require('mongoose');

// Schema
var Schema = mongoose.Schema;

var testSchema = new Schema({
  'symbol': String,
  'date_from': String,
  'date_to': String,
  'train_set': Number,
  'val_set': Number,
  'test_set': Number,
  'dates': [String],
  'features': [String],
  'history': [Number],
  'prediction': [Number],
  'timesteps': Number,
  'architecture': [Number],
  'dropout': Number,
  'train_rmse': Number,
  'test_rmse': Number,
  'train_mae': Number,
  'test_mae': Number,
  'train_ape_max': Number,
  'train_mape': Number,
  'test_ape_max': Number,
  'test_mape': Number,
  'train_accuracy': Number,
  'test_accuracy': Number,
  'train_duration': Number,
  'batch_size': Number,
  'epochs': Number,
  'early_stopping_patience': Number
});

// Indexes
testSchema.index({ symbol: 1 });

module.exports = mongoose.model('Test', testSchema);;

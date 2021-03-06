/**
 * Predictions business logic layer.
 */

var moment = require('moment');

module.exports = function (db) {

  var Prediction = db.Prediction;

  return {

    /**
     * Retrieves prediction by id.
     *
     * @param      {string}    id      Prediction id.
     * @param      {Function}  fn      Callback.
     */
    getPrediction: (id, fn) => {
      Prediction.findById(id, fn);
    },

    getPredictions: (symbol, fn) => {

      // get current UTC date
      date = moment.utc().format('YYYY-MM-DD');

      Prediction.getPredictions(symbol, date, fn);
    },

    getPredictionsFromDate: (date, symbol, fn) => {

      Prediction.getPredictions(symbol, date, fn);
    }

  };

};

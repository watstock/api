/**
 * GET forecast predictions.
 */

module.exports = (db) => {

  var service = require('../../../services/predictions.service')(db);

  return (req, res, next) => {

    service.getPredictions(req.params.symbol, (err, data) => {
      if (err) return next(err);

      if (!data) {
        return res.status(404).end();
      }

      res.send(data);
    });
  };
};

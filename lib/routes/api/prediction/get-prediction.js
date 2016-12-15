/**
 * GET prediction.
 */

module.exports = (db) => {

  var service = require('../../../services/predictions.service')(db);

  return (req, res, next) => {

    service.getPrediction(req.params.id, (err, data) => {
      if (err) return next(err);

      if (!data) {
        return res.status(404).end();
      }

      res.send(data);
    });
  };
};

/**
 * GET test.
 */

module.exports = (db) => {

  var service = require('../../../services/tests.service')(db);

  return (req, res, next) => {

    service.getTest(req.params.id, (err, data) => {
      if (err) return next(err);

      if (!data) {
        return res.status(404).end();
      }

      res.send(data);
    });
  };
};

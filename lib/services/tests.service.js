/**
 * Tests business logic layer.
 */


module.exports = function (db) {

  var Test = db.Test;

  return {

    /**
     * Retreives test by id.
     *
     * @param      {string}    id      Test id.
     * @param      {Function}  fn      Callback.
     */
    getTest: (id, fn) => {
      Test.findById(id, fn);
    }
    
  };

};

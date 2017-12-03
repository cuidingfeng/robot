define('home:components/Lodash/_baseSome.js', function(require, exports, module) {

  var baseEach = require('home:components/Lodash/_baseEach.js');
  
  /**
   * The base implementation of `_.some` without support for iteratee shorthands.
   *
   * @private
   * @param {Array|Object} collection The collection to iterate over.
   * @param {Function} predicate The function invoked per iteration.
   * @returns {boolean} Returns `true` if any element passes the predicate check, else `false`.
   */
  function baseSome(collection, predicate) {
    var result;
  
    baseEach(collection, function(value, index, collection) {
      result = predicate(value, index, collection);
      return !result;
    });
    return !!result;
  }
  
  module.exports = baseSome;
  

});

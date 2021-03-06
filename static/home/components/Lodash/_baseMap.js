define('home:components/Lodash/_baseMap.js', function(require, exports, module) {

  var baseEach = require('home:components/Lodash/_baseEach.js'),
      isArrayLike = require('home:components/Lodash/isArrayLike.js');
  
  /**
   * The base implementation of `_.map` without support for iteratee shorthands.
   *
   * @private
   * @param {Array|Object} collection The collection to iterate over.
   * @param {Function} iteratee The function invoked per iteration.
   * @returns {Array} Returns the new mapped array.
   */
  function baseMap(collection, iteratee) {
    var index = -1,
        result = isArrayLike(collection) ? Array(collection.length) : [];
  
    baseEach(collection, function(value, key, collection) {
      result[++index] = iteratee(value, key, collection);
    });
    return result;
  }
  
  module.exports = baseMap;
  

});

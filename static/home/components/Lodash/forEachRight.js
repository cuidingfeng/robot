define('home:components/Lodash/forEachRight.js', function(require, exports, module) {

  var arrayEachRight = require('home:components/Lodash/_arrayEachRight.js'),
      baseCastFunction = require('home:components/Lodash/_baseCastFunction.js'),
      baseEachRight = require('home:components/Lodash/_baseEachRight.js'),
      isArray = require('home:components/Lodash/isArray.js');
  
  /**
   * This method is like `_.forEach` except that it iterates over elements of
   * `collection` from right to left.
   *
   * @static
   * @memberOf _
   * @alias eachRight
   * @category Collection
   * @param {Array|Object} collection The collection to iterate over.
   * @param {Function} [iteratee=_.identity] The function invoked per iteration.
   * @returns {Array|Object} Returns `collection`.
   * @example
   *
   * _.forEachRight([1, 2], function(value) {
   *   console.log(value);
   * });
   * // => logs `2` then `1`
   */
  function forEachRight(collection, iteratee) {
    return (typeof iteratee == 'function' && isArray(collection))
      ? arrayEachRight(collection, iteratee)
      : baseEachRight(collection, baseCastFunction(iteratee));
  }
  
  module.exports = forEachRight;
  

});

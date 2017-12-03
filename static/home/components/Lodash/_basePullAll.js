define('home:components/Lodash/_basePullAll.js', function(require, exports, module) {

  var arrayMap = require('home:components/Lodash/_arrayMap.js'),
      baseIndexOf = require('home:components/Lodash/_baseIndexOf.js'),
      baseIndexOfWith = require('home:components/Lodash/_baseIndexOfWith.js'),
      baseUnary = require('home:components/Lodash/_baseUnary.js');
  
  /** Used for built-in method references. */
  var arrayProto = Array.prototype;
  
  /** Built-in value references. */
  var splice = arrayProto.splice;
  
  /**
   * The base implementation of `_.pullAllBy` without support for iteratee
   * shorthands.
   *
   * @private
   * @param {Array} array The array to modify.
   * @param {Array} values The values to remove.
   * @param {Function} [iteratee] The iteratee invoked per element.
   * @param {Function} [comparator] The comparator invoked per element.
   * @returns {Array} Returns `array`.
   */
  function basePullAll(array, values, iteratee, comparator) {
    var indexOf = comparator ? baseIndexOfWith : baseIndexOf,
        index = -1,
        length = values.length,
        seen = array;
  
    if (iteratee) {
      seen = arrayMap(array, baseUnary(iteratee));
    }
    while (++index < length) {
      var fromIndex = 0,
          value = values[index],
          computed = iteratee ? iteratee(value) : value;
  
      while ((fromIndex = indexOf(seen, computed, fromIndex, comparator)) > -1) {
        if (seen !== array) {
          splice.call(seen, fromIndex, 1);
        }
        splice.call(array, fromIndex, 1);
      }
    }
    return array;
  }
  
  module.exports = basePullAll;
  

});

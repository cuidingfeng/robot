define('home:components/Lodash/xor.js', function(require, exports, module) {

  var arrayFilter = require('home:components/Lodash/_arrayFilter.js'),
      baseXor = require('home:components/Lodash/_baseXor.js'),
      isArrayLikeObject = require('home:components/Lodash/isArrayLikeObject.js'),
      rest = require('home:components/Lodash/rest.js');
  
  /**
   * Creates an array of unique values that is the [symmetric difference](https://en.wikipedia.org/wiki/Symmetric_difference)
   * of the given arrays. The order of result values is determined by the order
   * they occur in the arrays.
   *
   * @static
   * @memberOf _
   * @category Array
   * @param {...Array} [arrays] The arrays to inspect.
   * @returns {Array} Returns the new array of values.
   * @example
   *
   * _.xor([2, 1], [4, 2]);
   * // => [1, 4]
   */
  var xor = rest(function(arrays) {
    return baseXor(arrayFilter(arrays, isArrayLikeObject));
  });
  
  module.exports = xor;
  

});

define('home:components/Lodash/difference.js', function(require, exports, module) {

  var baseDifference = require('home:components/Lodash/_baseDifference.js'),
      baseFlatten = require('home:components/Lodash/_baseFlatten.js'),
      isArrayLikeObject = require('home:components/Lodash/isArrayLikeObject.js'),
      rest = require('home:components/Lodash/rest.js');
  
  /**
   * Creates an array of unique `array` values not included in the other
   * given arrays using [`SameValueZero`](http://ecma-international.org/ecma-262/6.0/#sec-samevaluezero)
   * for equality comparisons. The order of result values is determined by the
   * order they occur in the first array.
   *
   * @static
   * @memberOf _
   * @category Array
   * @param {Array} array The array to inspect.
   * @param {...Array} [values] The values to exclude.
   * @returns {Array} Returns the new array of filtered values.
   * @example
   *
   * _.difference([3, 2, 1], [4, 2]);
   * // => [3, 1]
   */
  var difference = rest(function(array, values) {
    return isArrayLikeObject(array)
      ? baseDifference(array, baseFlatten(values, 1, true))
      : [];
  });
  
  module.exports = difference;
  

});

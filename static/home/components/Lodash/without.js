define('home:components/Lodash/without.js', function(require, exports, module) {

  var baseDifference = require('home:components/Lodash/_baseDifference.js'),
      isArrayLikeObject = require('home:components/Lodash/isArrayLikeObject.js'),
      rest = require('home:components/Lodash/rest.js');
  
  /**
   * Creates an array excluding all given values using
   * [`SameValueZero`](http://ecma-international.org/ecma-262/6.0/#sec-samevaluezero)
   * for equality comparisons.
   *
   * @static
   * @memberOf _
   * @category Array
   * @param {Array} array The array to filter.
   * @param {...*} [values] The values to exclude.
   * @returns {Array} Returns the new array of filtered values.
   * @example
   *
   * _.without([1, 2, 1, 3], 1, 2);
   * // => [3]
   */
  var without = rest(function(array, values) {
    return isArrayLikeObject(array)
      ? baseDifference(array, values)
      : [];
  });
  
  module.exports = without;
  

});

define('home:components/Lodash/differenceBy.js', function(require, exports, module) {

  var baseDifference = require('home:components/Lodash/_baseDifference.js'),
      baseFlatten = require('home:components/Lodash/_baseFlatten.js'),
      baseIteratee = require('home:components/Lodash/_baseIteratee.js'),
      isArrayLikeObject = require('home:components/Lodash/isArrayLikeObject.js'),
      last = require('home:components/Lodash/last.js'),
      rest = require('home:components/Lodash/rest.js');
  
  /**
   * This method is like `_.difference` except that it accepts `iteratee` which
   * is invoked for each element of `array` and `values` to generate the criterion
   * by which they're compared. Result values are chosen from the first array.
   * The iteratee is invoked with one argument: (value).
   *
   * @static
   * @memberOf _
   * @category Array
   * @param {Array} array The array to inspect.
   * @param {...Array} [values] The values to exclude.
   * @param {Function|Object|string} [iteratee=_.identity] The iteratee invoked per element.
   * @returns {Array} Returns the new array of filtered values.
   * @example
   *
   * _.differenceBy([3.1, 2.2, 1.3], [4.4, 2.5], Math.floor);
   * // => [3.1, 1.3]
   *
   * // The `_.property` iteratee shorthand.
   * _.differenceBy([{ 'x': 2 }, { 'x': 1 }], [{ 'x': 1 }], 'x');
   * // => [{ 'x': 2 }]
   */
  var differenceBy = rest(function(array, values) {
    var iteratee = last(values);
    if (isArrayLikeObject(iteratee)) {
      iteratee = undefined;
    }
    return isArrayLikeObject(array)
      ? baseDifference(array, baseFlatten(values, 1, true), baseIteratee(iteratee))
      : [];
  });
  
  module.exports = differenceBy;
  

});

define('home:components/Lodash/xorBy.js', function(require, exports, module) {

  var arrayFilter = require('home:components/Lodash/_arrayFilter.js'),
      baseIteratee = require('home:components/Lodash/_baseIteratee.js'),
      baseXor = require('home:components/Lodash/_baseXor.js'),
      isArrayLikeObject = require('home:components/Lodash/isArrayLikeObject.js'),
      last = require('home:components/Lodash/last.js'),
      rest = require('home:components/Lodash/rest.js');
  
  /**
   * This method is like `_.xor` except that it accepts `iteratee` which is
   * invoked for each element of each `arrays` to generate the criterion by which
   * by which they're compared. The iteratee is invoked with one argument: (value).
   *
   * @static
   * @memberOf _
   * @category Array
   * @param {...Array} [arrays] The arrays to inspect.
   * @param {Function|Object|string} [iteratee=_.identity] The iteratee invoked per element.
   * @returns {Array} Returns the new array of values.
   * @example
   *
   * _.xorBy([2.1, 1.2], [4.3, 2.4], Math.floor);
   * // => [1.2, 4.3]
   *
   * // The `_.property` iteratee shorthand.
   * _.xorBy([{ 'x': 1 }], [{ 'x': 2 }, { 'x': 1 }], 'x');
   * // => [{ 'x': 2 }]
   */
  var xorBy = rest(function(arrays) {
    var iteratee = last(arrays);
    if (isArrayLikeObject(iteratee)) {
      iteratee = undefined;
    }
    return baseXor(arrayFilter(arrays, isArrayLikeObject), baseIteratee(iteratee));
  });
  
  module.exports = xorBy;
  

});

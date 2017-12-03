define('home:components/Lodash/unionBy.js', function(require, exports, module) {

  var baseFlatten = require('home:components/Lodash/_baseFlatten.js'),
      baseIteratee = require('home:components/Lodash/_baseIteratee.js'),
      baseUniq = require('home:components/Lodash/_baseUniq.js'),
      isArrayLikeObject = require('home:components/Lodash/isArrayLikeObject.js'),
      last = require('home:components/Lodash/last.js'),
      rest = require('home:components/Lodash/rest.js');
  
  /**
   * This method is like `_.union` except that it accepts `iteratee` which is
   * invoked for each element of each `arrays` to generate the criterion by which
   * uniqueness is computed. The iteratee is invoked with one argument: (value).
   *
   * @static
   * @memberOf _
   * @category Array
   * @param {...Array} [arrays] The arrays to inspect.
   * @param {Function|Object|string} [iteratee=_.identity] The iteratee invoked per element.
   * @returns {Array} Returns the new array of combined values.
   * @example
   *
   * _.unionBy([2.1, 1.2], [4.3, 2.4], Math.floor);
   * // => [2.1, 1.2, 4.3]
   *
   * // The `_.property` iteratee shorthand.
   * _.unionBy([{ 'x': 1 }], [{ 'x': 2 }, { 'x': 1 }], 'x');
   * // => [{ 'x': 1 }, { 'x': 2 }]
   */
  var unionBy = rest(function(arrays) {
    var iteratee = last(arrays);
    if (isArrayLikeObject(iteratee)) {
      iteratee = undefined;
    }
    return baseUniq(baseFlatten(arrays, 1, true), baseIteratee(iteratee));
  });
  
  module.exports = unionBy;
  

});

define('home:components/Lodash/intersectionBy.js', function(require, exports, module) {

  var arrayMap = require('home:components/Lodash/_arrayMap.js'),
      baseCastArrayLikeObject = require('home:components/Lodash/_baseCastArrayLikeObject.js'),
      baseIntersection = require('home:components/Lodash/_baseIntersection.js'),
      baseIteratee = require('home:components/Lodash/_baseIteratee.js'),
      last = require('home:components/Lodash/last.js'),
      rest = require('home:components/Lodash/rest.js');
  
  /**
   * This method is like `_.intersection` except that it accepts `iteratee`
   * which is invoked for each element of each `arrays` to generate the criterion
   * by which they're compared. Result values are chosen from the first array.
   * The iteratee is invoked with one argument: (value).
   *
   * @static
   * @memberOf _
   * @category Array
   * @param {...Array} [arrays] The arrays to inspect.
   * @param {Function|Object|string} [iteratee=_.identity] The iteratee invoked per element.
   * @returns {Array} Returns the new array of intersecting values.
   * @example
   *
   * _.intersectionBy([2.1, 1.2], [4.3, 2.4], Math.floor);
   * // => [2.1]
   *
   * // The `_.property` iteratee shorthand.
   * _.intersectionBy([{ 'x': 1 }], [{ 'x': 2 }, { 'x': 1 }], 'x');
   * // => [{ 'x': 1 }]
   */
  var intersectionBy = rest(function(arrays) {
    var iteratee = last(arrays),
        mapped = arrayMap(arrays, baseCastArrayLikeObject);
  
    if (iteratee === last(mapped)) {
      iteratee = undefined;
    } else {
      mapped.pop();
    }
    return (mapped.length && mapped[0] === arrays[0])
      ? baseIntersection(mapped, baseIteratee(iteratee))
      : [];
  });
  
  module.exports = intersectionBy;
  

});

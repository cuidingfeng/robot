define('home:components/Lodash/intersection.js', function(require, exports, module) {

  var arrayMap = require('home:components/Lodash/_arrayMap.js'),
      baseCastArrayLikeObject = require('home:components/Lodash/_baseCastArrayLikeObject.js'),
      baseIntersection = require('home:components/Lodash/_baseIntersection.js'),
      rest = require('home:components/Lodash/rest.js');
  
  /**
   * Creates an array of unique values that are included in all given arrays
   * using [`SameValueZero`](http://ecma-international.org/ecma-262/6.0/#sec-samevaluezero)
   * for equality comparisons. The order of result values is determined by the
   * order they occur in the first array.
   *
   * @static
   * @memberOf _
   * @category Array
   * @param {...Array} [arrays] The arrays to inspect.
   * @returns {Array} Returns the new array of intersecting values.
   * @example
   *
   * _.intersection([2, 1], [4, 2], [1, 2]);
   * // => [2]
   */
  var intersection = rest(function(arrays) {
    var mapped = arrayMap(arrays, baseCastArrayLikeObject);
    return (mapped.length && mapped[0] === arrays[0])
      ? baseIntersection(mapped)
      : [];
  });
  
  module.exports = intersection;
  

});

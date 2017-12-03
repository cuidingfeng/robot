define('home:components/Lodash/union.js', function(require, exports, module) {

  var baseFlatten = require('home:components/Lodash/_baseFlatten.js'),
      baseUniq = require('home:components/Lodash/_baseUniq.js'),
      rest = require('home:components/Lodash/rest.js');
  
  /**
   * Creates an array of unique values, in order, from all given arrays using
   * [`SameValueZero`](http://ecma-international.org/ecma-262/6.0/#sec-samevaluezero)
   * for equality comparisons.
   *
   * @static
   * @memberOf _
   * @category Array
   * @param {...Array} [arrays] The arrays to inspect.
   * @returns {Array} Returns the new array of combined values.
   * @example
   *
   * _.union([2, 1], [4, 2], [1, 2]);
   * // => [2, 1, 4]
   */
  var union = rest(function(arrays) {
    return baseUniq(baseFlatten(arrays, 1, true));
  });
  
  module.exports = union;
  

});

define('home:components/Lodash/flattenDeep.js', function(require, exports, module) {

  var baseFlatten = require('home:components/Lodash/_baseFlatten.js');
  
  /** Used as references for various `Number` constants. */
  var INFINITY = 1 / 0;
  
  /**
   * Recursively flattens `array`.
   *
   * @static
   * @memberOf _
   * @category Array
   * @param {Array} array The array to flatten.
   * @returns {Array} Returns the new flattened array.
   * @example
   *
   * _.flattenDeep([1, [2, [3, [4]], 5]]);
   * // => [1, 2, 3, 4, 5]
   */
  function flattenDeep(array) {
    var length = array ? array.length : 0;
    return length ? baseFlatten(array, INFINITY) : [];
  }
  
  module.exports = flattenDeep;
  

});

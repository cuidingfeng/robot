define('home:components/Lodash/flatten.js', function(require, exports, module) {

  var baseFlatten = require('home:components/Lodash/_baseFlatten.js');
  
  /**
   * Flattens `array` a single level deep.
   *
   * @static
   * @memberOf _
   * @category Array
   * @param {Array} array The array to flatten.
   * @returns {Array} Returns the new flattened array.
   * @example
   *
   * _.flatten([1, [2, [3, [4]], 5]]);
   * // => [1, 2, [3, [4]], 5]
   */
  function flatten(array) {
    var length = array ? array.length : 0;
    return length ? baseFlatten(array, 1) : [];
  }
  
  module.exports = flatten;
  

});

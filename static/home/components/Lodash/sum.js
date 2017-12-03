define('home:components/Lodash/sum.js', function(require, exports, module) {

  var baseSum = require('home:components/Lodash/_baseSum.js'),
      identity = require('home:components/Lodash/identity.js');
  
  /**
   * Computes the sum of the values in `array`.
   *
   * @static
   * @memberOf _
   * @category Math
   * @param {Array} array The array to iterate over.
   * @returns {number} Returns the sum.
   * @example
   *
   * _.sum([4, 2, 8, 6]);
   * // => 20
   */
  function sum(array) {
    return (array && array.length)
      ? baseSum(array, identity)
      : 0;
  }
  
  module.exports = sum;
  

});

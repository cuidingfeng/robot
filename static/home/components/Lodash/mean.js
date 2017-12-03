define('home:components/Lodash/mean.js', function(require, exports, module) {

  var sum = require('home:components/Lodash/sum.js');
  
  /**
   * Computes the mean of the values in `array`.
   *
   * @static
   * @memberOf _
   * @category Math
   * @param {Array} array The array to iterate over.
   * @returns {number} Returns the mean.
   * @example
   *
   * _.mean([4, 2, 8, 6]);
   * // => 5
   */
  function mean(array) {
    return sum(array) / (array ? array.length : 0);
  }
  
  module.exports = mean;
  

});

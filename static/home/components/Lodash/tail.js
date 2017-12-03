define('home:components/Lodash/tail.js', function(require, exports, module) {

  var drop = require('home:components/Lodash/drop.js');
  
  /**
   * Gets all but the first element of `array`.
   *
   * @static
   * @memberOf _
   * @category Array
   * @param {Array} array The array to query.
   * @returns {Array} Returns the slice of `array`.
   * @example
   *
   * _.tail([1, 2, 3]);
   * // => [2, 3]
   */
  function tail(array) {
    return drop(array, 1);
  }
  
  module.exports = tail;
  

});

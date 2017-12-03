define('home:components/Lodash/initial.js', function(require, exports, module) {

  var dropRight = require('home:components/Lodash/dropRight.js');
  
  /**
   * Gets all but the last element of `array`.
   *
   * @static
   * @memberOf _
   * @category Array
   * @param {Array} array The array to query.
   * @returns {Array} Returns the slice of `array`.
   * @example
   *
   * _.initial([1, 2, 3]);
   * // => [1, 2]
   */
  function initial(array) {
    return dropRight(array, 1);
  }
  
  module.exports = initial;
  

});

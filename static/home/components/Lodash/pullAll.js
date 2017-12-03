define('home:components/Lodash/pullAll.js', function(require, exports, module) {

  var basePullAll = require('home:components/Lodash/_basePullAll.js');
  
  /**
   * This method is like `_.pull` except that it accepts an array of values to remove.
   *
   * **Note:** Unlike `_.difference`, this method mutates `array`.
   *
   * @static
   * @memberOf _
   * @category Array
   * @param {Array} array The array to modify.
   * @param {Array} values The values to remove.
   * @returns {Array} Returns `array`.
   * @example
   *
   * var array = [1, 2, 3, 1, 2, 3];
   *
   * _.pullAll(array, [2, 3]);
   * console.log(array);
   * // => [1, 1]
   */
  function pullAll(array, values) {
    return (array && array.length && values && values.length)
      ? basePullAll(array, values)
      : array;
  }
  
  module.exports = pullAll;
  

});

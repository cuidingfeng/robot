define('home:components/Lodash/isInteger.js', function(require, exports, module) {

  var toInteger = require('home:components/Lodash/toInteger.js');
  
  /**
   * Checks if `value` is an integer.
   *
   * **Note:** This method is based on [`Number.isInteger`](https://mdn.io/Number/isInteger).
   *
   * @static
   * @memberOf _
   * @category Lang
   * @param {*} value The value to check.
   * @returns {boolean} Returns `true` if `value` is an integer, else `false`.
   * @example
   *
   * _.isInteger(3);
   * // => true
   *
   * _.isInteger(Number.MIN_VALUE);
   * // => false
   *
   * _.isInteger(Infinity);
   * // => false
   *
   * _.isInteger('3');
   * // => false
   */
  function isInteger(value) {
    return typeof value == 'number' && value == toInteger(value);
  }
  
  module.exports = isInteger;
  

});

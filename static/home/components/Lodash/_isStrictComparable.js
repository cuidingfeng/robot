define('home:components/Lodash/_isStrictComparable.js', function(require, exports, module) {

  var isObject = require('home:components/Lodash/isObject.js');
  
  /**
   * Checks if `value` is suitable for strict equality comparisons, i.e. `===`.
   *
   * @private
   * @param {*} value The value to check.
   * @returns {boolean} Returns `true` if `value` if suitable for strict
   *  equality comparisons, else `false`.
   */
  function isStrictComparable(value) {
    return value === value && !isObject(value);
  }
  
  module.exports = isStrictComparable;
  

});

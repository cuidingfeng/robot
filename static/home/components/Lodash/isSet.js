define('home:components/Lodash/isSet.js', function(require, exports, module) {

  var getTag = require('home:components/Lodash/_getTag.js'),
      isObjectLike = require('home:components/Lodash/isObjectLike.js');
  
  /** `Object#toString` result references. */
  var setTag = '[object Set]';
  
  /**
   * Checks if `value` is classified as a `Set` object.
   *
   * @static
   * @memberOf _
   * @category Lang
   * @param {*} value The value to check.
   * @returns {boolean} Returns `true` if `value` is correctly classified, else `false`.
   * @example
   *
   * _.isSet(new Set);
   * // => true
   *
   * _.isSet(new WeakSet);
   * // => false
   */
  function isSet(value) {
    return isObjectLike(value) && getTag(value) == setTag;
  }
  
  module.exports = isSet;
  

});

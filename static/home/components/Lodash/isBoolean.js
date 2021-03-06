define('home:components/Lodash/isBoolean.js', function(require, exports, module) {

  var isObjectLike = require('home:components/Lodash/isObjectLike.js');
  
  /** `Object#toString` result references. */
  var boolTag = '[object Boolean]';
  
  /** Used for built-in method references. */
  var objectProto = Object.prototype;
  
  /**
   * Used to resolve the [`toStringTag`](http://ecma-international.org/ecma-262/6.0/#sec-object.prototype.tostring)
   * of values.
   */
  var objectToString = objectProto.toString;
  
  /**
   * Checks if `value` is classified as a boolean primitive or object.
   *
   * @static
   * @memberOf _
   * @category Lang
   * @param {*} value The value to check.
   * @returns {boolean} Returns `true` if `value` is correctly classified, else `false`.
   * @example
   *
   * _.isBoolean(false);
   * // => true
   *
   * _.isBoolean(null);
   * // => false
   */
  function isBoolean(value) {
    return value === true || value === false ||
      (isObjectLike(value) && objectToString.call(value) == boolTag);
  }
  
  module.exports = isBoolean;
  

});

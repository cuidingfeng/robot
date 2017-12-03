define('home:components/Lodash/isWeakMap.js', function(require, exports, module) {

  var getTag = require('home:components/Lodash/_getTag.js'),
      isObjectLike = require('home:components/Lodash/isObjectLike.js');
  
  /** `Object#toString` result references. */
  var weakMapTag = '[object WeakMap]';
  
  /**
   * Checks if `value` is classified as a `WeakMap` object.
   *
   * @static
   * @memberOf _
   * @category Lang
   * @param {*} value The value to check.
   * @returns {boolean} Returns `true` if `value` is correctly classified, else `false`.
   * @example
   *
   * _.isWeakMap(new WeakMap);
   * // => true
   *
   * _.isWeakMap(new Map);
   * // => false
   */
  function isWeakMap(value) {
    return isObjectLike(value) && getTag(value) == weakMapTag;
  }
  
  module.exports = isWeakMap;
  

});

define('home:components/Lodash/isElement.js', function(require, exports, module) {

  var isObjectLike = require('home:components/Lodash/isObjectLike.js'),
      isPlainObject = require('home:components/Lodash/isPlainObject.js');
  
  /**
   * Checks if `value` is likely a DOM element.
   *
   * @static
   * @memberOf _
   * @category Lang
   * @param {*} value The value to check.
   * @returns {boolean} Returns `true` if `value` is a DOM element, else `false`.
   * @example
   *
   * _.isElement(document.body);
   * // => true
   *
   * _.isElement('<body>');
   * // => false
   */
  function isElement(value) {
    return !!value && value.nodeType === 1 && isObjectLike(value) && !isPlainObject(value);
  }
  
  module.exports = isElement;
  

});

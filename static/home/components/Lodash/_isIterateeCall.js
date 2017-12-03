define('home:components/Lodash/_isIterateeCall.js', function(require, exports, module) {

  var eq = require('home:components/Lodash/eq.js'),
      isArrayLike = require('home:components/Lodash/isArrayLike.js'),
      isIndex = require('home:components/Lodash/_isIndex.js'),
      isObject = require('home:components/Lodash/isObject.js');
  
  /**
   * Checks if the given arguments are from an iteratee call.
   *
   * @private
   * @param {*} value The potential iteratee value argument.
   * @param {*} index The potential iteratee index or key argument.
   * @param {*} object The potential iteratee object argument.
   * @returns {boolean} Returns `true` if the arguments are from an iteratee call, else `false`.
   */
  function isIterateeCall(value, index, object) {
    if (!isObject(object)) {
      return false;
    }
    var type = typeof index;
    if (type == 'number'
        ? (isArrayLike(object) && isIndex(index, object.length))
        : (type == 'string' && index in object)) {
      return eq(object[index], value);
    }
    return false;
  }
  
  module.exports = isIterateeCall;
  

});

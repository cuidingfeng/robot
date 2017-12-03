define('home:components/Lodash/_getNative.js', function(require, exports, module) {

  var isNative = require('home:components/Lodash/isNative.js');
  
  /**
   * Gets the native function at `key` of `object`.
   *
   * @private
   * @param {Object} object The object to query.
   * @param {string} key The key of the method to get.
   * @returns {*} Returns the function if it's native, else `undefined`.
   */
  function getNative(object, key) {
    var value = object[key];
    return isNative(value) ? value : undefined;
  }
  
  module.exports = getNative;
  

});

define('home:components/Lodash/_baseCastArrayLikeObject.js', function(require, exports, module) {

  var isArrayLikeObject = require('home:components/Lodash/isArrayLikeObject.js');
  
  /**
   * Casts `value` to an empty array if it's not an array like object.
   *
   * @private
   * @param {*} value The value to inspect.
   * @returns {Array} Returns the array-like object.
   */
  function baseCastArrayLikeObject(value) {
    return isArrayLikeObject(value) ? value : [];
  }
  
  module.exports = baseCastArrayLikeObject;
  

});

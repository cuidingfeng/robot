define('home:components/Lodash/_baseFlatten.js', function(require, exports, module) {

  var arrayPush = require('home:components/Lodash/_arrayPush.js'),
      isArguments = require('home:components/Lodash/isArguments.js'),
      isArray = require('home:components/Lodash/isArray.js'),
      isArrayLikeObject = require('home:components/Lodash/isArrayLikeObject.js');
  
  /**
   * The base implementation of `_.flatten` with support for restricting flattening.
   *
   * @private
   * @param {Array} array The array to flatten.
   * @param {number} depth The maximum recursion depth.
   * @param {boolean} [isStrict] Restrict flattening to arrays-like objects.
   * @param {Array} [result=[]] The initial result value.
   * @returns {Array} Returns the new flattened array.
   */
  function baseFlatten(array, depth, isStrict, result) {
    result || (result = []);
  
    var index = -1,
        length = array.length;
  
    while (++index < length) {
      var value = array[index];
      if (depth > 0 && isArrayLikeObject(value) &&
          (isStrict || isArray(value) || isArguments(value))) {
        if (depth > 1) {
          // Recursively flatten arrays (susceptible to call stack limits).
          baseFlatten(value, depth - 1, isStrict, result);
        } else {
          arrayPush(result, value);
        }
      } else if (!isStrict) {
        result[result.length] = value;
      }
    }
    return result;
  }
  
  module.exports = baseFlatten;
  

});

define('home:components/Lodash/_baseCastPath.js', function(require, exports, module) {

  var isArray = require('home:components/Lodash/isArray.js'),
      stringToPath = require('home:components/Lodash/_stringToPath.js');
  
  /**
   * Casts `value` to a path array if it's not one.
   *
   * @private
   * @param {*} value The value to inspect.
   * @returns {Array} Returns the cast property path array.
   */
  function baseCastPath(value) {
    return isArray(value) ? value : stringToPath(value);
  }
  
  module.exports = baseCastPath;
  

});

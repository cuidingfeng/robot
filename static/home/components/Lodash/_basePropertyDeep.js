define('home:components/Lodash/_basePropertyDeep.js', function(require, exports, module) {

  var baseGet = require('home:components/Lodash/_baseGet.js');
  
  /**
   * A specialized version of `baseProperty` which supports deep paths.
   *
   * @private
   * @param {Array|string} path The path of the property to get.
   * @returns {Function} Returns the new function.
   */
  function basePropertyDeep(path) {
    return function(object) {
      return baseGet(object, path);
    };
  }
  
  module.exports = basePropertyDeep;
  

});

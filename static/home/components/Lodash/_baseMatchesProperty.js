define('home:components/Lodash/_baseMatchesProperty.js', function(require, exports, module) {

  var baseIsEqual = require('home:components/Lodash/_baseIsEqual.js'),
      get = require('home:components/Lodash/get.js'),
      hasIn = require('home:components/Lodash/hasIn.js');
  
  /** Used to compose bitmasks for comparison styles. */
  var UNORDERED_COMPARE_FLAG = 1,
      PARTIAL_COMPARE_FLAG = 2;
  
  /**
   * The base implementation of `_.matchesProperty` which doesn't clone `srcValue`.
   *
   * @private
   * @param {string} path The path of the property to get.
   * @param {*} srcValue The value to match.
   * @returns {Function} Returns the new function.
   */
  function baseMatchesProperty(path, srcValue) {
    return function(object) {
      var objValue = get(object, path);
      return (objValue === undefined && objValue === srcValue)
        ? hasIn(object, path)
        : baseIsEqual(srcValue, objValue, undefined, UNORDERED_COMPARE_FLAG | PARTIAL_COMPARE_FLAG);
    };
  }
  
  module.exports = baseMatchesProperty;
  

});

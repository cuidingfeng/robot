define('home:components/Lodash/_baseFunctions.js', function(require, exports, module) {

  var arrayFilter = require('home:components/Lodash/_arrayFilter.js'),
      isFunction = require('home:components/Lodash/isFunction.js');
  
  /**
   * The base implementation of `_.functions` which creates an array of
   * `object` function property names filtered from `props`.
   *
   * @private
   * @param {Object} object The object to inspect.
   * @param {Array} props The property names to filter.
   * @returns {Array} Returns the new array of filtered property names.
   */
  function baseFunctions(object, props) {
    return arrayFilter(props, function(key) {
      return isFunction(object[key]);
    });
  }
  
  module.exports = baseFunctions;
  

});

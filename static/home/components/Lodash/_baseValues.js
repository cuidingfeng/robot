define('home:components/Lodash/_baseValues.js', function(require, exports, module) {

  var arrayMap = require('home:components/Lodash/_arrayMap.js');
  
  /**
   * The base implementation of `_.values` and `_.valuesIn` which creates an
   * array of `object` property values corresponding to the property names
   * of `props`.
   *
   * @private
   * @param {Object} object The object to query.
   * @param {Array} props The property names to get values for.
   * @returns {Object} Returns the array of property values.
   */
  function baseValues(object, props) {
    return arrayMap(props, function(key) {
      return object[key];
    });
  }
  
  module.exports = baseValues;
  

});

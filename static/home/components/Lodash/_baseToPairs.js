define('home:components/Lodash/_baseToPairs.js', function(require, exports, module) {

  var arrayMap = require('home:components/Lodash/_arrayMap.js');
  
  /**
   * The base implementation of `_.toPairs` and `_.toPairsIn` which creates an array
   * of key-value pairs for `object` corresponding to the property names of `props`.
   *
   * @private
   * @param {Object} object The object to query.
   * @param {Array} props The property names to get values for.
   * @returns {Object} Returns the new array of key-value pairs.
   */
  function baseToPairs(object, props) {
    return arrayMap(props, function(key) {
      return [key, object[key]];
    });
  }
  
  module.exports = baseToPairs;
  

});

define('home:components/Lodash/_cloneMap.js', function(require, exports, module) {

  var addMapEntry = require('home:components/Lodash/_addMapEntry.js'),
      arrayReduce = require('home:components/Lodash/_arrayReduce.js'),
      mapToArray = require('home:components/Lodash/_mapToArray.js');
  
  /**
   * Creates a clone of `map`.
   *
   * @private
   * @param {Object} map The map to clone.
   * @returns {Object} Returns the cloned map.
   */
  function cloneMap(map) {
    return arrayReduce(mapToArray(map), addMapEntry, new map.constructor);
  }
  
  module.exports = cloneMap;
  

});

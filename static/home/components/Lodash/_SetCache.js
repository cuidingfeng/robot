define('home:components/Lodash/_SetCache.js', function(require, exports, module) {

  var MapCache = require('home:components/Lodash/_MapCache.js'),
      cachePush = require('home:components/Lodash/_cachePush.js');
  
  /**
   *
   * Creates a set cache object to store unique values.
   *
   * @private
   * @constructor
   * @param {Array} [values] The values to cache.
   */
  function SetCache(values) {
    var index = -1,
        length = values ? values.length : 0;
  
    this.__data__ = new MapCache;
    while (++index < length) {
      this.push(values[index]);
    }
  }
  
  // Add functions to the `SetCache`.
  SetCache.prototype.push = cachePush;
  
  module.exports = SetCache;
  

});

define('home:components/Lodash/_MapCache.js', function(require, exports, module) {

  var mapClear = require('home:components/Lodash/_mapClear.js'),
      mapDelete = require('home:components/Lodash/_mapDelete.js'),
      mapGet = require('home:components/Lodash/_mapGet.js'),
      mapHas = require('home:components/Lodash/_mapHas.js'),
      mapSet = require('home:components/Lodash/_mapSet.js');
  
  /**
   * Creates a map cache object to store key-value pairs.
   *
   * @private
   * @constructor
   * @param {Array} [values] The values to cache.
   */
  function MapCache(values) {
    var index = -1,
        length = values ? values.length : 0;
  
    this.clear();
    while (++index < length) {
      var entry = values[index];
      this.set(entry[0], entry[1]);
    }
  }
  
  // Add functions to the `MapCache`.
  MapCache.prototype.clear = mapClear;
  MapCache.prototype['delete'] = mapDelete;
  MapCache.prototype.get = mapGet;
  MapCache.prototype.has = mapHas;
  MapCache.prototype.set = mapSet;
  
  module.exports = MapCache;
  

});

define('home:components/Lodash/_stackSet.js', function(require, exports, module) {

  var MapCache = require('home:components/Lodash/_MapCache.js'),
      assocSet = require('home:components/Lodash/_assocSet.js');
  
  /** Used as the size to enable large array optimizations. */
  var LARGE_ARRAY_SIZE = 200;
  
  /**
   * Sets the stack `key` to `value`.
   *
   * @private
   * @name set
   * @memberOf Stack
   * @param {string} key The key of the value to set.
   * @param {*} value The value to set.
   * @returns {Object} Returns the stack cache object.
   */
  function stackSet(key, value) {
    var data = this.__data__,
        array = data.array;
  
    if (array) {
      if (array.length < (LARGE_ARRAY_SIZE - 1)) {
        assocSet(array, key, value);
      } else {
        data.array = null;
        data.map = new MapCache(array);
      }
    }
    var map = data.map;
    if (map) {
      map.set(key, value);
    }
    return this;
  }
  
  module.exports = stackSet;
  

});

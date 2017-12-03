define('home:components/Lodash/_mapSet.js', function(require, exports, module) {

  var Map = require('home:components/Lodash/_Map.js'),
      assocSet = require('home:components/Lodash/_assocSet.js'),
      hashSet = require('home:components/Lodash/_hashSet.js'),
      isKeyable = require('home:components/Lodash/_isKeyable.js');
  
  /**
   * Sets the map `key` to `value`.
   *
   * @private
   * @name set
   * @memberOf MapCache
   * @param {string} key The key of the value to set.
   * @param {*} value The value to set.
   * @returns {Object} Returns the map cache object.
   */
  function mapSet(key, value) {
    var data = this.__data__;
    if (isKeyable(key)) {
      hashSet(typeof key == 'string' ? data.string : data.hash, key, value);
    } else if (Map) {
      data.map.set(key, value);
    } else {
      assocSet(data.map, key, value);
    }
    return this;
  }
  
  module.exports = mapSet;
  

});

define('home:components/Lodash/_mapHas.js', function(require, exports, module) {

  var Map = require('home:components/Lodash/_Map.js'),
      assocHas = require('home:components/Lodash/_assocHas.js'),
      hashHas = require('home:components/Lodash/_hashHas.js'),
      isKeyable = require('home:components/Lodash/_isKeyable.js');
  
  /**
   * Checks if a map value for `key` exists.
   *
   * @private
   * @name has
   * @memberOf MapCache
   * @param {string} key The key of the entry to check.
   * @returns {boolean} Returns `true` if an entry for `key` exists, else `false`.
   */
  function mapHas(key) {
    var data = this.__data__;
    if (isKeyable(key)) {
      return hashHas(typeof key == 'string' ? data.string : data.hash, key);
    }
    return Map ? data.map.has(key) : assocHas(data.map, key);
  }
  
  module.exports = mapHas;
  

});

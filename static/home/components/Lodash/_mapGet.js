define('home:components/Lodash/_mapGet.js', function(require, exports, module) {

  var Map = require('home:components/Lodash/_Map.js'),
      assocGet = require('home:components/Lodash/_assocGet.js'),
      hashGet = require('home:components/Lodash/_hashGet.js'),
      isKeyable = require('home:components/Lodash/_isKeyable.js');
  
  /**
   * Gets the map value for `key`.
   *
   * @private
   * @name get
   * @memberOf MapCache
   * @param {string} key The key of the value to get.
   * @returns {*} Returns the entry value.
   */
  function mapGet(key) {
    var data = this.__data__;
    if (isKeyable(key)) {
      return hashGet(typeof key == 'string' ? data.string : data.hash, key);
    }
    return Map ? data.map.get(key) : assocGet(data.map, key);
  }
  
  module.exports = mapGet;
  

});

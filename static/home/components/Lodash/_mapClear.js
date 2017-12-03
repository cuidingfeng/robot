define('home:components/Lodash/_mapClear.js', function(require, exports, module) {

  var Hash = require('home:components/Lodash/_Hash.js'),
      Map = require('home:components/Lodash/_Map.js');
  
  /**
   * Removes all key-value entries from the map.
   *
   * @private
   * @name clear
   * @memberOf MapCache
   */
  function mapClear() {
    this.__data__ = {
      'hash': new Hash,
      'map': Map ? new Map : [],
      'string': new Hash
    };
  }
  
  module.exports = mapClear;
  

});

define('home:components/Lodash/_mapDelete.js', function(require, exports, module) {

  var Map = require('home:components/Lodash/_Map.js'),
      assocDelete = require('home:components/Lodash/_assocDelete.js'),
      hashDelete = require('home:components/Lodash/_hashDelete.js'),
      isKeyable = require('home:components/Lodash/_isKeyable.js');
  
  /**
   * Removes `key` and its value from the map.
   *
   * @private
   * @name delete
   * @memberOf MapCache
   * @param {string} key The key of the value to remove.
   * @returns {boolean} Returns `true` if the entry was removed, else `false`.
   */
  function mapDelete(key) {
    var data = this.__data__;
    if (isKeyable(key)) {
      return hashDelete(typeof key == 'string' ? data.string : data.hash, key);
    }
    return Map ? data.map['delete'](key) : assocDelete(data.map, key);
  }
  
  module.exports = mapDelete;
  

});

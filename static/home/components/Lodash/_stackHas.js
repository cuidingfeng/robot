define('home:components/Lodash/_stackHas.js', function(require, exports, module) {

  var assocHas = require('home:components/Lodash/_assocHas.js');
  
  /**
   * Checks if a stack value for `key` exists.
   *
   * @private
   * @name has
   * @memberOf Stack
   * @param {string} key The key of the entry to check.
   * @returns {boolean} Returns `true` if an entry for `key` exists, else `false`.
   */
  function stackHas(key) {
    var data = this.__data__,
        array = data.array;
  
    return array ? assocHas(array, key) : data.map.has(key);
  }
  
  module.exports = stackHas;
  

});

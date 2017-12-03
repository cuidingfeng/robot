define('home:components/Lodash/_stackGet.js', function(require, exports, module) {

  var assocGet = require('home:components/Lodash/_assocGet.js');
  
  /**
   * Gets the stack value for `key`.
   *
   * @private
   * @name get
   * @memberOf Stack
   * @param {string} key The key of the value to get.
   * @returns {*} Returns the entry value.
   */
  function stackGet(key) {
    var data = this.__data__,
        array = data.array;
  
    return array ? assocGet(array, key) : data.map.get(key);
  }
  
  module.exports = stackGet;
  

});

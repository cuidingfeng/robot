define('home:components/Lodash/_assocIndexOf.js', function(require, exports, module) {

  var eq = require('home:components/Lodash/eq.js');
  
  /**
   * Gets the index at which the first occurrence of `key` is found in `array`
   * of key-value pairs.
   *
   * @private
   * @param {Array} array The array to search.
   * @param {*} key The key to search for.
   * @returns {number} Returns the index of the matched value, else `-1`.
   */
  function assocIndexOf(array, key) {
    var length = array.length;
    while (length--) {
      if (eq(array[length][0], key)) {
        return length;
      }
    }
    return -1;
  }
  
  module.exports = assocIndexOf;
  

});

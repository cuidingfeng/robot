define('home:components/Lodash/_assocSet.js', function(require, exports, module) {

  var assocIndexOf = require('home:components/Lodash/_assocIndexOf.js');
  
  /**
   * Sets the associative array `key` to `value`.
   *
   * @private
   * @param {Array} array The array to modify.
   * @param {string} key The key of the value to set.
   * @param {*} value The value to set.
   */
  function assocSet(array, key, value) {
    var index = assocIndexOf(array, key);
    if (index < 0) {
      array.push([key, value]);
    } else {
      array[index][1] = value;
    }
  }
  
  module.exports = assocSet;
  

});

define('home:components/Lodash/_assocHas.js', function(require, exports, module) {

  var assocIndexOf = require('home:components/Lodash/_assocIndexOf.js');
  
  /**
   * Checks if an associative array value for `key` exists.
   *
   * @private
   * @param {Array} array The array to query.
   * @param {string} key The key of the entry to check.
   * @returns {boolean} Returns `true` if an entry for `key` exists, else `false`.
   */
  function assocHas(array, key) {
    return assocIndexOf(array, key) > -1;
  }
  
  module.exports = assocHas;
  

});

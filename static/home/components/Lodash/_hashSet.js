define('home:components/Lodash/_hashSet.js', function(require, exports, module) {

  var nativeCreate = require('home:components/Lodash/_nativeCreate.js');
  
  /** Used to stand-in for `undefined` hash values. */
  var HASH_UNDEFINED = '__lodash_hash_undefined__';
  
  /**
   * Sets the hash `key` to `value`.
   *
   * @private
   * @param {Object} hash The hash to modify.
   * @param {string} key The key of the value to set.
   * @param {*} value The value to set.
   */
  function hashSet(hash, key, value) {
    hash[key] = (nativeCreate && value === undefined) ? HASH_UNDEFINED : value;
  }
  
  module.exports = hashSet;
  

});

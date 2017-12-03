define('home:components/Lodash/_baseUnset.js', function(require, exports, module) {

  var baseCastPath = require('home:components/Lodash/_baseCastPath.js'),
      has = require('home:components/Lodash/has.js'),
      isKey = require('home:components/Lodash/_isKey.js'),
      last = require('home:components/Lodash/last.js'),
      parent = require('home:components/Lodash/_parent.js');
  
  /**
   * The base implementation of `_.unset`.
   *
   * @private
   * @param {Object} object The object to modify.
   * @param {Array|string} path The path of the property to unset.
   * @returns {boolean} Returns `true` if the property is deleted, else `false`.
   */
  function baseUnset(object, path) {
    path = isKey(path, object) ? [path + ''] : baseCastPath(path);
    object = parent(object, path);
    var key = last(path);
    return (object != null && has(object, key)) ? delete object[key] : true;
  }
  
  module.exports = baseUnset;
  

});

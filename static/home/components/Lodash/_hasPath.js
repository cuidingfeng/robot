define('home:components/Lodash/_hasPath.js', function(require, exports, module) {

  var baseCastPath = require('home:components/Lodash/_baseCastPath.js'),
      isArguments = require('home:components/Lodash/isArguments.js'),
      isArray = require('home:components/Lodash/isArray.js'),
      isIndex = require('home:components/Lodash/_isIndex.js'),
      isKey = require('home:components/Lodash/_isKey.js'),
      isLength = require('home:components/Lodash/isLength.js'),
      isString = require('home:components/Lodash/isString.js'),
      last = require('home:components/Lodash/last.js'),
      parent = require('home:components/Lodash/_parent.js');
  
  /**
   * Checks if `path` exists on `object`.
   *
   * @private
   * @param {Object} object The object to query.
   * @param {Array|string} path The path to check.
   * @param {Function} hasFunc The function to check properties.
   * @returns {boolean} Returns `true` if `path` exists, else `false`.
   */
  function hasPath(object, path, hasFunc) {
    if (object == null) {
      return false;
    }
    var result = hasFunc(object, path);
    if (!result && !isKey(path)) {
      path = baseCastPath(path);
      object = parent(object, path);
      if (object != null) {
        path = last(path);
        result = hasFunc(object, path);
      }
    }
    var length = object ? object.length : undefined;
    return result || (
      !!length && isLength(length) && isIndex(path, length) &&
      (isArray(object) || isString(object) || isArguments(object))
    );
  }
  
  module.exports = hasPath;
  

});

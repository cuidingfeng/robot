define('home:components/Lodash/_indexKeys.js', function(require, exports, module) {

  var baseTimes = require('home:components/Lodash/_baseTimes.js'),
      isArguments = require('home:components/Lodash/isArguments.js'),
      isArray = require('home:components/Lodash/isArray.js'),
      isLength = require('home:components/Lodash/isLength.js'),
      isString = require('home:components/Lodash/isString.js');
  
  /**
   * Creates an array of index keys for `object` values of arrays,
   * `arguments` objects, and strings, otherwise `null` is returned.
   *
   * @private
   * @param {Object} object The object to query.
   * @returns {Array|null} Returns index keys, else `null`.
   */
  function indexKeys(object) {
    var length = object ? object.length : undefined;
    if (isLength(length) &&
        (isArray(object) || isString(object) || isArguments(object))) {
      return baseTimes(length, String);
    }
    return null;
  }
  
  module.exports = indexKeys;
  

});

define('home:components/Lodash/_baseGet.js', function(require, exports, module) {

  var baseCastPath = require('home:components/Lodash/_baseCastPath.js'),
      isKey = require('home:components/Lodash/_isKey.js');
  
  /**
   * The base implementation of `_.get` without support for default values.
   *
   * @private
   * @param {Object} object The object to query.
   * @param {Array|string} path The path of the property to get.
   * @returns {*} Returns the resolved value.
   */
  function baseGet(object, path) {
    path = isKey(path, object) ? [path + ''] : baseCastPath(path);
  
    var index = 0,
        length = path.length;
  
    while (object != null && index < length) {
      object = object[path[index++]];
    }
    return (index && index == length) ? object : undefined;
  }
  
  module.exports = baseGet;
  

});

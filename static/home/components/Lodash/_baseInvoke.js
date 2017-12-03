define('home:components/Lodash/_baseInvoke.js', function(require, exports, module) {

  var apply = require('home:components/Lodash/_apply.js'),
      baseCastPath = require('home:components/Lodash/_baseCastPath.js'),
      isKey = require('home:components/Lodash/_isKey.js'),
      last = require('home:components/Lodash/last.js'),
      parent = require('home:components/Lodash/_parent.js');
  
  /**
   * The base implementation of `_.invoke` without support for individual
   * method arguments.
   *
   * @private
   * @param {Object} object The object to query.
   * @param {Array|string} path The path of the method to invoke.
   * @param {Array} args The arguments to invoke the method with.
   * @returns {*} Returns the result of the invoked method.
   */
  function baseInvoke(object, path, args) {
    if (!isKey(path, object)) {
      path = baseCastPath(path);
      object = parent(object, path);
      path = last(path);
    }
    var func = object == null ? object : object[path];
    return func == null ? undefined : apply(func, object, args);
  }
  
  module.exports = baseInvoke;
  

});

define('home:components/Lodash/_baseSetData.js', function(require, exports, module) {

  var identity = require('home:components/Lodash/identity.js'),
      metaMap = require('home:components/Lodash/_metaMap.js');
  
  /**
   * The base implementation of `setData` without support for hot loop detection.
   *
   * @private
   * @param {Function} func The function to associate metadata with.
   * @param {*} data The metadata.
   * @returns {Function} Returns `func`.
   */
  var baseSetData = !metaMap ? identity : function(func, data) {
    metaMap.set(func, data);
    return func;
  };
  
  module.exports = baseSetData;
  

});

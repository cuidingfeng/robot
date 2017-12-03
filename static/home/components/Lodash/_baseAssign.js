define('home:components/Lodash/_baseAssign.js', function(require, exports, module) {

  var copyObject = require('home:components/Lodash/_copyObject.js'),
      keys = require('home:components/Lodash/keys.js');
  
  /**
   * The base implementation of `_.assign` without support for multiple sources
   * or `customizer` functions.
   *
   * @private
   * @param {Object} object The destination object.
   * @param {Object} source The source object.
   * @returns {Object} Returns `object`.
   */
  function baseAssign(object, source) {
    return object && copyObject(source, keys(source), object);
  }
  
  module.exports = baseAssign;
  

});

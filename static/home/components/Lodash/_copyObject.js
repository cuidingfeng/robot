define('home:components/Lodash/_copyObject.js', function(require, exports, module) {

  var copyObjectWith = require('home:components/Lodash/_copyObjectWith.js');
  
  /**
   * Copies properties of `source` to `object`.
   *
   * @private
   * @param {Object} source The object to copy properties from.
   * @param {Array} props The property names to copy.
   * @param {Object} [object={}] The object to copy properties to.
   * @returns {Object} Returns `object`.
   */
  function copyObject(source, props, object) {
    return copyObjectWith(source, props, object);
  }
  
  module.exports = copyObject;
  

});

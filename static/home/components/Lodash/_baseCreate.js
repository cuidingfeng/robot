define('home:components/Lodash/_baseCreate.js', function(require, exports, module) {

  var isObject = require('home:components/Lodash/isObject.js');
  
  /** Built-in value references. */
  var objectCreate = Object.create;
  
  /**
   * The base implementation of `_.create` without support for assigning
   * properties to the created object.
   *
   * @private
   * @param {Object} prototype The object to inherit from.
   * @returns {Object} Returns the new object.
   */
  function baseCreate(proto) {
    return isObject(proto) ? objectCreate(proto) : {};
  }
  
  module.exports = baseCreate;
  

});

define('home:components/Lodash/_initCloneObject.js', function(require, exports, module) {

  var baseCreate = require('home:components/Lodash/_baseCreate.js'),
      isPrototype = require('home:components/Lodash/_isPrototype.js');
  
  /** Built-in value references. */
  var getPrototypeOf = Object.getPrototypeOf;
  
  /**
   * Initializes an object clone.
   *
   * @private
   * @param {Object} object The object to clone.
   * @returns {Object} Returns the initialized clone.
   */
  function initCloneObject(object) {
    return (typeof object.constructor == 'function' && !isPrototype(object))
      ? baseCreate(getPrototypeOf(object))
      : {};
  }
  
  module.exports = initCloneObject;
  

});

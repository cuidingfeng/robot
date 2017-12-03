define('home:components/Lodash/_Hash.js', function(require, exports, module) {

  var nativeCreate = require('home:components/Lodash/_nativeCreate.js');
  
  /** Used for built-in method references. */
  var objectProto = Object.prototype;
  
  /**
   * Creates an hash object.
   *
   * @private
   * @constructor
   * @returns {Object} Returns the new hash object.
   */
  function Hash() {}
  
  // Avoid inheriting from `Object.prototype` when possible.
  Hash.prototype = nativeCreate ? nativeCreate(null) : objectProto;
  
  module.exports = Hash;
  

});

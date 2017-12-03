define('home:components/Lodash/_baseCastFunction.js', function(require, exports, module) {

  var identity = require('home:components/Lodash/identity.js');
  
  /**
   * Casts `value` to `identity` if it's not a function.
   *
   * @private
   * @param {*} value The value to inspect.
   * @returns {Array} Returns the array-like object.
   */
  function baseCastFunction(value) {
    return typeof value == 'function' ? value : identity;
  }
  
  module.exports = baseCastFunction;
  

});

define('home:components/Lodash/_baseForRight.js', function(require, exports, module) {

  var createBaseFor = require('home:components/Lodash/_createBaseFor.js');
  
  /**
   * This function is like `baseFor` except that it iterates over properties
   * in the opposite order.
   *
   * @private
   * @param {Object} object The object to iterate over.
   * @param {Function} iteratee The function invoked per iteration.
   * @param {Function} keysFunc The function to get the keys of `object`.
   * @returns {Object} Returns `object`.
   */
  var baseForRight = createBaseFor(true);
  
  module.exports = baseForRight;
  

});

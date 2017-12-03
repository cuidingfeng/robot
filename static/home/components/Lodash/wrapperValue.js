define('home:components/Lodash/wrapperValue.js', function(require, exports, module) {

  var baseWrapperValue = require('home:components/Lodash/_baseWrapperValue.js');
  
  /**
   * Executes the chained sequence to extract the unwrapped value.
   *
   * @name value
   * @memberOf _
   * @alias toJSON, valueOf
   * @category Seq
   * @returns {*} Returns the resolved unwrapped value.
   * @example
   *
   * _([1, 2, 3]).value();
   * // => [1, 2, 3]
   */
  function wrapperValue() {
    return baseWrapperValue(this.__wrapped__, this.__actions__);
  }
  
  module.exports = wrapperValue;
  

});

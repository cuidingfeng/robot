define('home:components/Lodash/_stackClear.js', function(require, exports, module) {

  /**
   * Removes all key-value entries from the stack.
   *
   * @private
   * @name clear
   * @memberOf Stack
   */
  function stackClear() {
    this.__data__ = { 'array': [], 'map': null };
  }
  
  module.exports = stackClear;
  

});

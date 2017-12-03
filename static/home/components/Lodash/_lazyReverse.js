define('home:components/Lodash/_lazyReverse.js', function(require, exports, module) {

  var LazyWrapper = require('home:components/Lodash/_LazyWrapper.js');
  
  /**
   * Reverses the direction of lazy iteration.
   *
   * @private
   * @name reverse
   * @memberOf LazyWrapper
   * @returns {Object} Returns the new reversed `LazyWrapper` object.
   */
  function lazyReverse() {
    if (this.__filtered__) {
      var result = new LazyWrapper(this);
      result.__dir__ = -1;
      result.__filtered__ = true;
    } else {
      result = this.clone();
      result.__dir__ *= -1;
    }
    return result;
  }
  
  module.exports = lazyReverse;
  

});

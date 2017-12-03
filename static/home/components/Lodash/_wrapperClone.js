define('home:components/Lodash/_wrapperClone.js', function(require, exports, module) {

  var LazyWrapper = require('home:components/Lodash/_LazyWrapper.js'),
      LodashWrapper = require('home:components/Lodash/_LodashWrapper.js'),
      copyArray = require('home:components/Lodash/_copyArray.js');
  
  /**
   * Creates a clone of `wrapper`.
   *
   * @private
   * @param {Object} wrapper The wrapper to clone.
   * @returns {Object} Returns the cloned wrapper.
   */
  function wrapperClone(wrapper) {
    if (wrapper instanceof LazyWrapper) {
      return wrapper.clone();
    }
    var result = new LodashWrapper(wrapper.__wrapped__, wrapper.__chain__);
    result.__actions__ = copyArray(wrapper.__actions__);
    result.__index__  = wrapper.__index__;
    result.__values__ = wrapper.__values__;
    return result;
  }
  
  module.exports = wrapperClone;
  

});

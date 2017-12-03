define('home:components/Lodash/wrapperReverse.js', function(require, exports, module) {

  var LazyWrapper = require('home:components/Lodash/_LazyWrapper.js'),
      LodashWrapper = require('home:components/Lodash/_LodashWrapper.js'),
      reverse = require('home:components/Lodash/reverse.js'),
      thru = require('home:components/Lodash/thru.js');
  
  /**
   * This method is the wrapper version of `_.reverse`.
   *
   * **Note:** This method mutates the wrapped array.
   *
   * @name reverse
   * @memberOf _
   * @category Seq
   * @returns {Object} Returns the new `lodash` wrapper instance.
   * @example
   *
   * var array = [1, 2, 3];
   *
   * _(array).reverse().value()
   * // => [3, 2, 1]
   *
   * console.log(array);
   * // => [3, 2, 1]
   */
  function wrapperReverse() {
    var value = this.__wrapped__;
    if (value instanceof LazyWrapper) {
      var wrapped = value;
      if (this.__actions__.length) {
        wrapped = new LazyWrapper(this);
      }
      wrapped = wrapped.reverse();
      wrapped.__actions__.push({
        'func': thru,
        'args': [reverse],
        'thisArg': undefined
      });
      return new LodashWrapper(wrapped, this.__chain__);
    }
    return this.thru(reverse);
  }
  
  module.exports = wrapperReverse;
  

});

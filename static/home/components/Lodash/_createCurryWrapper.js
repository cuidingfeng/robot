define('home:components/Lodash/_createCurryWrapper.js', function(require, exports, module) {

  var apply = require('home:components/Lodash/_apply.js'),
      createCtorWrapper = require('home:components/Lodash/_createCtorWrapper.js'),
      createHybridWrapper = require('home:components/Lodash/_createHybridWrapper.js'),
      createRecurryWrapper = require('home:components/Lodash/_createRecurryWrapper.js'),
      getPlaceholder = require('home:components/Lodash/_getPlaceholder.js'),
      replaceHolders = require('home:components/Lodash/_replaceHolders.js'),
      root = require('home:components/Lodash/_root.js');
  
  /**
   * Creates a function that wraps `func` to enable currying.
   *
   * @private
   * @param {Function} func The function to wrap.
   * @param {number} bitmask The bitmask of wrapper flags. See `createWrapper` for more details.
   * @param {number} arity The arity of `func`.
   * @returns {Function} Returns the new wrapped function.
   */
  function createCurryWrapper(func, bitmask, arity) {
    var Ctor = createCtorWrapper(func);
  
    function wrapper() {
      var length = arguments.length,
          args = Array(length),
          index = length,
          placeholder = getPlaceholder(wrapper);
  
      while (index--) {
        args[index] = arguments[index];
      }
      var holders = (length < 3 && args[0] !== placeholder && args[length - 1] !== placeholder)
        ? []
        : replaceHolders(args, placeholder);
  
      length -= holders.length;
      if (length < arity) {
        return createRecurryWrapper(
          func, bitmask, createHybridWrapper, wrapper.placeholder, undefined,
          args, holders, undefined, undefined, arity - length);
      }
      var fn = (this && this !== root && this instanceof wrapper) ? Ctor : func;
      return apply(fn, this, args);
    }
    return wrapper;
  }
  
  module.exports = createCurryWrapper;
  

});

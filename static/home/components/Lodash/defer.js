define('home:components/Lodash/defer.js', function(require, exports, module) {

  var baseDelay = require('home:components/Lodash/_baseDelay.js'),
      rest = require('home:components/Lodash/rest.js');
  
  /**
   * Defers invoking the `func` until the current call stack has cleared. Any
   * additional arguments are provided to `func` when it's invoked.
   *
   * @static
   * @memberOf _
   * @category Function
   * @param {Function} func The function to defer.
   * @param {...*} [args] The arguments to invoke `func` with.
   * @returns {number} Returns the timer id.
   * @example
   *
   * _.defer(function(text) {
   *   console.log(text);
   * }, 'deferred');
   * // => logs 'deferred' after one or more milliseconds
   */
  var defer = rest(function(func, args) {
    return baseDelay(func, 1, args);
  });
  
  module.exports = defer;
  

});

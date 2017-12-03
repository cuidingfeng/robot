define('home:components/Lodash/delay.js', function(require, exports, module) {

  var baseDelay = require('home:components/Lodash/_baseDelay.js'),
      rest = require('home:components/Lodash/rest.js'),
      toNumber = require('home:components/Lodash/toNumber.js');
  
  /**
   * Invokes `func` after `wait` milliseconds. Any additional arguments are
   * provided to `func` when it's invoked.
   *
   * @static
   * @memberOf _
   * @category Function
   * @param {Function} func The function to delay.
   * @param {number} wait The number of milliseconds to delay invocation.
   * @param {...*} [args] The arguments to invoke `func` with.
   * @returns {number} Returns the timer id.
   * @example
   *
   * _.delay(function(text) {
   *   console.log(text);
   * }, 1000, 'later');
   * // => logs 'later' after one second
   */
  var delay = rest(function(func, wait, args) {
    return baseDelay(func, toNumber(wait) || 0, args);
  });
  
  module.exports = delay;
  

});

define('home:components/Lodash/unary.js', function(require, exports, module) {

  var ary = require('home:components/Lodash/ary.js');
  
  /**
   * Creates a function that accepts up to one argument, ignoring any
   * additional arguments.
   *
   * @static
   * @memberOf _
   * @category Function
   * @param {Function} func The function to cap arguments for.
   * @returns {Function} Returns the new function.
   * @example
   *
   * _.map(['6', '8', '10'], _.unary(parseInt));
   * // => [6, 8, 10]
   */
  function unary(func) {
    return ary(func, 1);
  }
  
  module.exports = unary;
  

});

define('home:components/Lodash/flowRight.js', function(require, exports, module) {

  var createFlow = require('home:components/Lodash/_createFlow.js');
  
  /**
   * This method is like `_.flow` except that it creates a function that
   * invokes the given functions from right to left.
   *
   * @static
   * @memberOf _
   * @category Util
   * @param {...(Function|Function[])} [funcs] Functions to invoke.
   * @returns {Function} Returns the new function.
   * @example
   *
   * function square(n) {
   *   return n * n;
   * }
   *
   * var addSquare = _.flowRight(square, _.add);
   * addSquare(1, 2);
   * // => 9
   */
  var flowRight = createFlow(true);
  
  module.exports = flowRight;
  

});

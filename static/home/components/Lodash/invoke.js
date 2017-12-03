define('home:components/Lodash/invoke.js', function(require, exports, module) {

  var baseInvoke = require('home:components/Lodash/_baseInvoke.js'),
      rest = require('home:components/Lodash/rest.js');
  
  /**
   * Invokes the method at `path` of `object`.
   *
   * @static
   * @memberOf _
   * @category Object
   * @param {Object} object The object to query.
   * @param {Array|string} path The path of the method to invoke.
   * @param {...*} [args] The arguments to invoke the method with.
   * @returns {*} Returns the result of the invoked method.
   * @example
   *
   * var object = { 'a': [{ 'b': { 'c': [1, 2, 3, 4] } }] };
   *
   * _.invoke(object, 'a[0].b.c.slice', 1, 3);
   * // => [2, 3]
   */
  var invoke = rest(baseInvoke);
  
  module.exports = invoke;
  

});

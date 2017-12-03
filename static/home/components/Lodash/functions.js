define('home:components/Lodash/functions.js', function(require, exports, module) {

  var baseFunctions = require('home:components/Lodash/_baseFunctions.js'),
      keys = require('home:components/Lodash/keys.js');
  
  /**
   * Creates an array of function property names from own enumerable properties
   * of `object`.
   *
   * @static
   * @memberOf _
   * @category Object
   * @param {Object} object The object to inspect.
   * @returns {Array} Returns the new array of property names.
   * @example
   *
   * function Foo() {
   *   this.a = _.constant('a');
   *   this.b = _.constant('b');
   * }
   *
   * Foo.prototype.c = _.constant('c');
   *
   * _.functions(new Foo);
   * // => ['a', 'b']
   */
  function functions(object) {
    return object == null ? [] : baseFunctions(object, keys(object));
  }
  
  module.exports = functions;
  

});

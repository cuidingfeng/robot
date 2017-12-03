define('home:components/Lodash/forOwnRight.js', function(require, exports, module) {

  var baseCastFunction = require('home:components/Lodash/_baseCastFunction.js'),
      baseForOwnRight = require('home:components/Lodash/_baseForOwnRight.js');
  
  /**
   * This method is like `_.forOwn` except that it iterates over properties of
   * `object` in the opposite order.
   *
   * @static
   * @memberOf _
   * @category Object
   * @param {Object} object The object to iterate over.
   * @param {Function} [iteratee=_.identity] The function invoked per iteration.
   * @returns {Object} Returns `object`.
   * @example
   *
   * function Foo() {
   *   this.a = 1;
   *   this.b = 2;
   * }
   *
   * Foo.prototype.c = 3;
   *
   * _.forOwnRight(new Foo, function(value, key) {
   *   console.log(key);
   * });
   * // => logs 'b' then 'a' assuming `_.forOwn` logs 'a' then 'b'
   */
  function forOwnRight(object, iteratee) {
    return object && baseForOwnRight(object, baseCastFunction(iteratee));
  }
  
  module.exports = forOwnRight;
  

});

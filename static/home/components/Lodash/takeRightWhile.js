define('home:components/Lodash/takeRightWhile.js', function(require, exports, module) {

  var baseIteratee = require('home:components/Lodash/_baseIteratee.js'),
      baseWhile = require('home:components/Lodash/_baseWhile.js');
  
  /**
   * Creates a slice of `array` with elements taken from the end. Elements are
   * taken until `predicate` returns falsey. The predicate is invoked with three
   * arguments: (value, index, array).
   *
   * @static
   * @memberOf _
   * @category Array
   * @param {Array} array The array to query.
   * @param {Function|Object|string} [predicate=_.identity] The function invoked per iteration.
   * @returns {Array} Returns the slice of `array`.
   * @example
   *
   * var users = [
   *   { 'user': 'barney',  'active': true },
   *   { 'user': 'fred',    'active': false },
   *   { 'user': 'pebbles', 'active': false }
   * ];
   *
   * _.takeRightWhile(users, function(o) { return !o.active; });
   * // => objects for ['fred', 'pebbles']
   *
   * // The `_.matches` iteratee shorthand.
   * _.takeRightWhile(users, { 'user': 'pebbles', 'active': false });
   * // => objects for ['pebbles']
   *
   * // The `_.matchesProperty` iteratee shorthand.
   * _.takeRightWhile(users, ['active', false]);
   * // => objects for ['fred', 'pebbles']
   *
   * // The `_.property` iteratee shorthand.
   * _.takeRightWhile(users, 'active');
   * // => []
   */
  function takeRightWhile(array, predicate) {
    return (array && array.length)
      ? baseWhile(array, baseIteratee(predicate, 3), false, true)
      : [];
  }
  
  module.exports = takeRightWhile;
  

});

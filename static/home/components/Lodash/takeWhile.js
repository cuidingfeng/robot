define('home:components/Lodash/takeWhile.js', function(require, exports, module) {

  var baseIteratee = require('home:components/Lodash/_baseIteratee.js'),
      baseWhile = require('home:components/Lodash/_baseWhile.js');
  
  /**
   * Creates a slice of `array` with elements taken from the beginning. Elements
   * are taken until `predicate` returns falsey. The predicate is invoked with
   * three arguments: (value, index, array).
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
   *   { 'user': 'barney',  'active': false },
   *   { 'user': 'fred',    'active': false},
   *   { 'user': 'pebbles', 'active': true }
   * ];
   *
   * _.takeWhile(users, function(o) { return !o.active; });
   * // => objects for ['barney', 'fred']
   *
   * // The `_.matches` iteratee shorthand.
   * _.takeWhile(users, { 'user': 'barney', 'active': false });
   * // => objects for ['barney']
   *
   * // The `_.matchesProperty` iteratee shorthand.
   * _.takeWhile(users, ['active', false]);
   * // => objects for ['barney', 'fred']
   *
   * // The `_.property` iteratee shorthand.
   * _.takeWhile(users, 'active');
   * // => []
   */
  function takeWhile(array, predicate) {
    return (array && array.length)
      ? baseWhile(array, baseIteratee(predicate, 3))
      : [];
  }
  
  module.exports = takeWhile;
  

});

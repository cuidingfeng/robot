define('home:components/Lodash/filter.js', function(require, exports, module) {

  var arrayFilter = require('home:components/Lodash/_arrayFilter.js'),
      baseFilter = require('home:components/Lodash/_baseFilter.js'),
      baseIteratee = require('home:components/Lodash/_baseIteratee.js'),
      isArray = require('home:components/Lodash/isArray.js');
  
  /**
   * Iterates over elements of `collection`, returning an array of all elements
   * `predicate` returns truthy for. The predicate is invoked with three arguments:
   * (value, index|key, collection).
   *
   * @static
   * @memberOf _
   * @category Collection
   * @param {Array|Object} collection The collection to iterate over.
   * @param {Function|Object|string} [predicate=_.identity] The function invoked per iteration.
   * @returns {Array} Returns the new filtered array.
   * @example
   *
   * var users = [
   *   { 'user': 'barney', 'age': 36, 'active': true },
   *   { 'user': 'fred',   'age': 40, 'active': false }
   * ];
   *
   * _.filter(users, function(o) { return !o.active; });
   * // => objects for ['fred']
   *
   * // The `_.matches` iteratee shorthand.
   * _.filter(users, { 'age': 36, 'active': true });
   * // => objects for ['barney']
   *
   * // The `_.matchesProperty` iteratee shorthand.
   * _.filter(users, ['active', false]);
   * // => objects for ['fred']
   *
   * // The `_.property` iteratee shorthand.
   * _.filter(users, 'active');
   * // => objects for ['barney']
   */
  function filter(collection, predicate) {
    var func = isArray(collection) ? arrayFilter : baseFilter;
    return func(collection, baseIteratee(predicate, 3));
  }
  
  module.exports = filter;
  

});

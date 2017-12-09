define('home:components/Lodash/mapValues.js', function(require, exports, module) {

  var baseForOwn = require('home:components/Lodash/_baseForOwn.js'),
      baseIteratee = require('home:components/Lodash/_baseIteratee.js');
  
  /**
   * Creates an object with the same keys as `object` and values generated by
   * running each own enumerable property of `object` through `iteratee`. The
   * iteratee is invoked with three arguments: (value, key, object).
   *
   * @static
   * @memberOf _
   * @category Object
   * @param {Object} object The object to iterate over.
   * @param {Function|Object|string} [iteratee=_.identity] The function invoked per iteration.
   * @returns {Object} Returns the new mapped object.
   * @example
   *
   * var users = {
   *   'fred':    { 'user': 'fred',    'age': 40 },
   *   'pebbles': { 'user': 'pebbles', 'age': 1 }
   * };
   *
   * _.mapValues(users, function(o) { return o.age; });
   * // => { 'fred': 40, 'pebbles': 1 } (iteration order is not guaranteed)
   *
   * // The `_.property` iteratee shorthand.
   * _.mapValues(users, 'age');
   * // => { 'fred': 40, 'pebbles': 1 } (iteration order is not guaranteed)
   */
  function mapValues(object, iteratee) {
    var result = {};
    iteratee = baseIteratee(iteratee, 3);
  
    baseForOwn(object, function(value, key, object) {
      result[key] = iteratee(value, key, object);
    });
    return result;
  }
  
  module.exports = mapValues;
  

});
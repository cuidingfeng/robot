define('home:components/Lodash/transform.js', function(require, exports, module) {

  var arrayEach = require('home:components/Lodash/_arrayEach.js'),
      baseCreate = require('home:components/Lodash/_baseCreate.js'),
      baseForOwn = require('home:components/Lodash/_baseForOwn.js'),
      baseIteratee = require('home:components/Lodash/_baseIteratee.js'),
      isArray = require('home:components/Lodash/isArray.js'),
      isFunction = require('home:components/Lodash/isFunction.js'),
      isObject = require('home:components/Lodash/isObject.js'),
      isTypedArray = require('home:components/Lodash/isTypedArray.js');
  
  /** Built-in value references. */
  var getPrototypeOf = Object.getPrototypeOf;
  
  /**
   * An alternative to `_.reduce`; this method transforms `object` to a new
   * `accumulator` object which is the result of running each of its own enumerable
   * properties through `iteratee`, with each invocation potentially mutating
   * the `accumulator` object. The iteratee is invoked with four arguments:
   * (accumulator, value, key, object). Iteratee functions may exit iteration
   * early by explicitly returning `false`.
   *
   * @static
   * @memberOf _
   * @category Object
   * @param {Array|Object} object The object to iterate over.
   * @param {Function} [iteratee=_.identity] The function invoked per iteration.
   * @param {*} [accumulator] The custom accumulator value.
   * @returns {*} Returns the accumulated value.
   * @example
   *
   * _.transform([2, 3, 4], function(result, n) {
   *   result.push(n *= n);
   *   return n % 2 == 0;
   * }, []);
   * // => [4, 9]
   *
   * _.transform({ 'a': 1, 'b': 2, 'c': 1 }, function(result, value, key) {
   *   (result[value] || (result[value] = [])).push(key);
   * }, {});
   * // => { '1': ['a', 'c'], '2': ['b'] }
   */
  function transform(object, iteratee, accumulator) {
    var isArr = isArray(object) || isTypedArray(object);
    iteratee = baseIteratee(iteratee, 4);
  
    if (accumulator == null) {
      if (isArr || isObject(object)) {
        var Ctor = object.constructor;
        if (isArr) {
          accumulator = isArray(object) ? new Ctor : [];
        } else {
          accumulator = isFunction(Ctor) ? baseCreate(getPrototypeOf(object)) : {};
        }
      } else {
        accumulator = {};
      }
    }
    (isArr ? arrayEach : baseForOwn)(object, function(value, index, object) {
      return iteratee(accumulator, value, index, object);
    });
    return accumulator;
  }
  
  module.exports = transform;
  

});

define('home:components/Lodash/xorWith.js', function(require, exports, module) {

  var arrayFilter = require('home:components/Lodash/_arrayFilter.js'),
      baseXor = require('home:components/Lodash/_baseXor.js'),
      isArrayLikeObject = require('home:components/Lodash/isArrayLikeObject.js'),
      last = require('home:components/Lodash/last.js'),
      rest = require('home:components/Lodash/rest.js');
  
  /**
   * This method is like `_.xor` except that it accepts `comparator` which is
   * invoked to compare elements of `arrays`. The comparator is invoked with
   * two arguments: (arrVal, othVal).
   *
   * @static
   * @memberOf _
   * @category Array
   * @param {...Array} [arrays] The arrays to inspect.
   * @param {Function} [comparator] The comparator invoked per element.
   * @returns {Array} Returns the new array of values.
   * @example
   *
   * var objects = [{ 'x': 1, 'y': 2 }, { 'x': 2, 'y': 1 }];
   * var others = [{ 'x': 1, 'y': 1 }, { 'x': 1, 'y': 2 }];
   *
   * _.xorWith(objects, others, _.isEqual);
   * // => [{ 'x': 2, 'y': 1 }, { 'x': 1, 'y': 1 }]
   */
  var xorWith = rest(function(arrays) {
    var comparator = last(arrays);
    if (isArrayLikeObject(comparator)) {
      comparator = undefined;
    }
    return baseXor(arrayFilter(arrays, isArrayLikeObject), undefined, comparator);
  });
  
  module.exports = xorWith;
  

});

define('home:components/Lodash/differenceWith.js', function(require, exports, module) {

  var baseDifference = require('home:components/Lodash/_baseDifference.js'),
      baseFlatten = require('home:components/Lodash/_baseFlatten.js'),
      isArrayLikeObject = require('home:components/Lodash/isArrayLikeObject.js'),
      last = require('home:components/Lodash/last.js'),
      rest = require('home:components/Lodash/rest.js');
  
  /**
   * This method is like `_.difference` except that it accepts `comparator`
   * which is invoked to compare elements of `array` to `values`. Result values
   * are chosen from the first array. The comparator is invoked with two arguments:
   * (arrVal, othVal).
   *
   * @static
   * @memberOf _
   * @category Array
   * @param {Array} array The array to inspect.
   * @param {...Array} [values] The values to exclude.
   * @param {Function} [comparator] The comparator invoked per element.
   * @returns {Array} Returns the new array of filtered values.
   * @example
   *
   * var objects = [{ 'x': 1, 'y': 2 }, { 'x': 2, 'y': 1 }];
   *
   * _.differenceWith(objects, [{ 'x': 1, 'y': 2 }], _.isEqual);
   * // => [{ 'x': 2, 'y': 1 }]
   */
  var differenceWith = rest(function(array, values) {
    var comparator = last(values);
    if (isArrayLikeObject(comparator)) {
      comparator = undefined;
    }
    return isArrayLikeObject(array)
      ? baseDifference(array, baseFlatten(values, 1, true), undefined, comparator)
      : [];
  });
  
  module.exports = differenceWith;
  

});

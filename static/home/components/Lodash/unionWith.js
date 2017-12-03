define('home:components/Lodash/unionWith.js', function(require, exports, module) {

  var baseFlatten = require('home:components/Lodash/_baseFlatten.js'),
      baseUniq = require('home:components/Lodash/_baseUniq.js'),
      isArrayLikeObject = require('home:components/Lodash/isArrayLikeObject.js'),
      last = require('home:components/Lodash/last.js'),
      rest = require('home:components/Lodash/rest.js');
  
  /**
   * This method is like `_.union` except that it accepts `comparator` which
   * is invoked to compare elements of `arrays`. The comparator is invoked
   * with two arguments: (arrVal, othVal).
   *
   * @static
   * @memberOf _
   * @category Array
   * @param {...Array} [arrays] The arrays to inspect.
   * @param {Function} [comparator] The comparator invoked per element.
   * @returns {Array} Returns the new array of combined values.
   * @example
   *
   * var objects = [{ 'x': 1, 'y': 2 }, { 'x': 2, 'y': 1 }];
   * var others = [{ 'x': 1, 'y': 1 }, { 'x': 1, 'y': 2 }];
   *
   * _.unionWith(objects, others, _.isEqual);
   * // => [{ 'x': 1, 'y': 2 }, { 'x': 2, 'y': 1 }, { 'x': 1, 'y': 1 }]
   */
  var unionWith = rest(function(arrays) {
    var comparator = last(arrays);
    if (isArrayLikeObject(comparator)) {
      comparator = undefined;
    }
    return baseUniq(baseFlatten(arrays, 1, true), undefined, comparator);
  });
  
  module.exports = unionWith;
  

});

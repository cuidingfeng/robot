define('home:components/Lodash/findLast.js', function(require, exports, module) {

  var baseEachRight = require('home:components/Lodash/_baseEachRight.js'),
      baseFind = require('home:components/Lodash/_baseFind.js'),
      baseFindIndex = require('home:components/Lodash/_baseFindIndex.js'),
      baseIteratee = require('home:components/Lodash/_baseIteratee.js'),
      isArray = require('home:components/Lodash/isArray.js');
  
  /**
   * This method is like `_.find` except that it iterates over elements of
   * `collection` from right to left.
   *
   * @static
   * @memberOf _
   * @category Collection
   * @param {Array|Object} collection The collection to search.
   * @param {Function|Object|string} [predicate=_.identity] The function invoked per iteration.
   * @returns {*} Returns the matched element, else `undefined`.
   * @example
   *
   * _.findLast([1, 2, 3, 4], function(n) {
   *   return n % 2 == 1;
   * });
   * // => 3
   */
  function findLast(collection, predicate) {
    predicate = baseIteratee(predicate, 3);
    if (isArray(collection)) {
      var index = baseFindIndex(collection, predicate, true);
      return index > -1 ? collection[index] : undefined;
    }
    return baseFind(collection, predicate, baseEachRight);
  }
  
  module.exports = findLast;
  

});

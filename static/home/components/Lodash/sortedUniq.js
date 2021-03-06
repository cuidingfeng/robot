define('home:components/Lodash/sortedUniq.js', function(require, exports, module) {

  var baseSortedUniq = require('home:components/Lodash/_baseSortedUniq.js');
  
  /**
   * This method is like `_.uniq` except that it's designed and optimized
   * for sorted arrays.
   *
   * @static
   * @memberOf _
   * @category Array
   * @param {Array} array The array to inspect.
   * @returns {Array} Returns the new duplicate free array.
   * @example
   *
   * _.sortedUniq([1, 1, 2]);
   * // => [1, 2]
   */
  function sortedUniq(array) {
    return (array && array.length)
      ? baseSortedUniq(array)
      : [];
  }
  
  module.exports = sortedUniq;
  

});

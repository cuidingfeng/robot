define('home:components/Lodash/unzipWith.js', function(require, exports, module) {

  var apply = require('home:components/Lodash/_apply.js'),
      arrayMap = require('home:components/Lodash/_arrayMap.js'),
      unzip = require('home:components/Lodash/unzip.js');
  
  /**
   * This method is like `_.unzip` except that it accepts `iteratee` to specify
   * how regrouped values should be combined. The iteratee is invoked with the
   * elements of each group: (...group).
   *
   * @static
   * @memberOf _
   * @category Array
   * @param {Array} array The array of grouped elements to process.
   * @param {Function} [iteratee=_.identity] The function to combine regrouped values.
   * @returns {Array} Returns the new array of regrouped elements.
   * @example
   *
   * var zipped = _.zip([1, 2], [10, 20], [100, 200]);
   * // => [[1, 10, 100], [2, 20, 200]]
   *
   * _.unzipWith(zipped, _.add);
   * // => [3, 30, 300]
   */
  function unzipWith(array, iteratee) {
    if (!(array && array.length)) {
      return [];
    }
    var result = unzip(array);
    if (iteratee == null) {
      return result;
    }
    return arrayMap(result, function(group) {
      return apply(iteratee, undefined, group);
    });
  }
  
  module.exports = unzipWith;
  

});

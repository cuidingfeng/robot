define('home:components/Lodash/reduceRight.js', function(require, exports, module) {

  var arrayReduceRight = require('home:components/Lodash/_arrayReduceRight.js'),
      baseEachRight = require('home:components/Lodash/_baseEachRight.js'),
      baseIteratee = require('home:components/Lodash/_baseIteratee.js'),
      baseReduce = require('home:components/Lodash/_baseReduce.js'),
      isArray = require('home:components/Lodash/isArray.js');
  
  /**
   * This method is like `_.reduce` except that it iterates over elements of
   * `collection` from right to left.
   *
   * @static
   * @memberOf _
   * @category Collection
   * @param {Array|Object} collection The collection to iterate over.
   * @param {Function} [iteratee=_.identity] The function invoked per iteration.
   * @param {*} [accumulator] The initial value.
   * @returns {*} Returns the accumulated value.
   * @example
   *
   * var array = [[0, 1], [2, 3], [4, 5]];
   *
   * _.reduceRight(array, function(flattened, other) {
   *   return flattened.concat(other);
   * }, []);
   * // => [4, 5, 2, 3, 0, 1]
   */
  function reduceRight(collection, iteratee, accumulator) {
    var func = isArray(collection) ? arrayReduceRight : baseReduce,
        initAccum = arguments.length < 3;
  
    return func(collection, baseIteratee(iteratee, 4), accumulator, initAccum, baseEachRight);
  }
  
  module.exports = reduceRight;
  

});

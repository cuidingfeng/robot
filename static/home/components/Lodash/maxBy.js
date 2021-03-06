define('home:components/Lodash/maxBy.js', function(require, exports, module) {

  var baseExtremum = require('home:components/Lodash/_baseExtremum.js'),
      baseIteratee = require('home:components/Lodash/_baseIteratee.js'),
      gt = require('home:components/Lodash/gt.js');
  
  /**
   * This method is like `_.max` except that it accepts `iteratee` which is
   * invoked for each element in `array` to generate the criterion by which
   * the value is ranked. The iteratee is invoked with one argument: (value).
   *
   * @static
   * @memberOf _
   * @category Math
   * @param {Array} array The array to iterate over.
   * @param {Function|Object|string} [iteratee=_.identity] The iteratee invoked per element.
   * @returns {*} Returns the maximum value.
   * @example
   *
   * var objects = [{ 'n': 1 }, { 'n': 2 }];
   *
   * _.maxBy(objects, function(o) { return o.n; });
   * // => { 'n': 2 }
   *
   * // The `_.property` iteratee shorthand.
   * _.maxBy(objects, 'n');
   * // => { 'n': 2 }
   */
  function maxBy(array, iteratee) {
    return (array && array.length)
      ? baseExtremum(array, baseIteratee(iteratee), gt)
      : undefined;
  }
  
  module.exports = maxBy;
  

});

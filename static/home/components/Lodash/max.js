define('home:components/Lodash/max.js', function(require, exports, module) {

  var baseExtremum = require('home:components/Lodash/_baseExtremum.js'),
      gt = require('home:components/Lodash/gt.js'),
      identity = require('home:components/Lodash/identity.js');
  
  /**
   * Computes the maximum value of `array`. If `array` is empty or falsey
   * `undefined` is returned.
   *
   * @static
   * @memberOf _
   * @category Math
   * @param {Array} array The array to iterate over.
   * @returns {*} Returns the maximum value.
   * @example
   *
   * _.max([4, 2, 8, 6]);
   * // => 8
   *
   * _.max([]);
   * // => undefined
   */
  function max(array) {
    return (array && array.length)
      ? baseExtremum(array, identity, gt)
      : undefined;
  }
  
  module.exports = max;
  

});

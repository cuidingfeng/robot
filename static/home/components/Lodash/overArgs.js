define('home:components/Lodash/overArgs.js', function(require, exports, module) {

  var apply = require('home:components/Lodash/_apply.js'),
      arrayMap = require('home:components/Lodash/_arrayMap.js'),
      baseFlatten = require('home:components/Lodash/_baseFlatten.js'),
      baseIteratee = require('home:components/Lodash/_baseIteratee.js'),
      rest = require('home:components/Lodash/rest.js');
  
  /* Built-in method references for those with the same name as other `lodash` methods. */
  var nativeMin = Math.min;
  
  /**
   * Creates a function that invokes `func` with arguments transformed by
   * corresponding `transforms`.
   *
   * @static
   * @memberOf _
   * @category Function
   * @param {Function} func The function to wrap.
   * @param {...(Function|Function[])} [transforms] The functions to transform
   * arguments, specified individually or in arrays.
   * @returns {Function} Returns the new function.
   * @example
   *
   * function doubled(n) {
   *   return n * 2;
   * }
   *
   * function square(n) {
   *   return n * n;
   * }
   *
   * var func = _.overArgs(function(x, y) {
   *   return [x, y];
   * }, square, doubled);
   *
   * func(9, 3);
   * // => [81, 6]
   *
   * func(10, 5);
   * // => [100, 10]
   */
  var overArgs = rest(function(func, transforms) {
    transforms = arrayMap(baseFlatten(transforms, 1), baseIteratee);
  
    var funcsLength = transforms.length;
    return rest(function(args) {
      var index = -1,
          length = nativeMin(args.length, funcsLength);
  
      while (++index < length) {
        args[index] = transforms[index].call(this, args[index]);
      }
      return apply(func, this, args);
    });
  });
  
  module.exports = overArgs;
  

});

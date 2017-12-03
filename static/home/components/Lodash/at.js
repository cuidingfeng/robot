define('home:components/Lodash/at.js', function(require, exports, module) {

  var baseAt = require('home:components/Lodash/_baseAt.js'),
      baseFlatten = require('home:components/Lodash/_baseFlatten.js'),
      rest = require('home:components/Lodash/rest.js');
  
  /**
   * Creates an array of values corresponding to `paths` of `object`.
   *
   * @static
   * @memberOf _
   * @category Object
   * @param {Object} object The object to iterate over.
   * @param {...(string|string[])} [paths] The property paths of elements to pick,
   *  specified individually or in arrays.
   * @returns {Array} Returns the new array of picked elements.
   * @example
   *
   * var object = { 'a': [{ 'b': { 'c': 3 } }, 4] };
   *
   * _.at(object, ['a[0].b.c', 'a[1]']);
   * // => [3, 4]
   *
   * _.at(['a', 'b', 'c'], 0, 2);
   * // => ['a', 'c']
   */
  var at = rest(function(object, paths) {
    return baseAt(object, baseFlatten(paths, 1));
  });
  
  module.exports = at;
  

});

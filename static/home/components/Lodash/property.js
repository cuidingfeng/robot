define('home:components/Lodash/property.js', function(require, exports, module) {

  var baseProperty = require('home:components/Lodash/_baseProperty.js'),
      basePropertyDeep = require('home:components/Lodash/_basePropertyDeep.js'),
      isKey = require('home:components/Lodash/_isKey.js');
  
  /**
   * Creates a function that returns the value at `path` of a given object.
   *
   * @static
   * @memberOf _
   * @category Util
   * @param {Array|string} path The path of the property to get.
   * @returns {Function} Returns the new function.
   * @example
   *
   * var objects = [
   *   { 'a': { 'b': { 'c': 2 } } },
   *   { 'a': { 'b': { 'c': 1 } } }
   * ];
   *
   * _.map(objects, _.property('a.b.c'));
   * // => [2, 1]
   *
   * _.map(_.sortBy(objects, _.property(['a', 'b', 'c'])), 'a.b.c');
   * // => [1, 2]
   */
  function property(path) {
    return isKey(path) ? baseProperty(path) : basePropertyDeep(path);
  }
  
  module.exports = property;
  

});

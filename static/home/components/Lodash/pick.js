define('home:components/Lodash/pick.js', function(require, exports, module) {

  var baseFlatten = require('home:components/Lodash/_baseFlatten.js'),
      basePick = require('home:components/Lodash/_basePick.js'),
      rest = require('home:components/Lodash/rest.js');
  
  /**
   * Creates an object composed of the picked `object` properties.
   *
   * @static
   * @memberOf _
   * @category Object
   * @param {Object} object The source object.
   * @param {...(string|string[])} [props] The property names to pick, specified
   *  individually or in arrays.
   * @returns {Object} Returns the new object.
   * @example
   *
   * var object = { 'a': 1, 'b': '2', 'c': 3 };
   *
   * _.pick(object, ['a', 'c']);
   * // => { 'a': 1, 'c': 3 }
   */
  var pick = rest(function(object, props) {
    return object == null ? {} : basePick(object, baseFlatten(props, 1));
  });
  
  module.exports = pick;
  

});

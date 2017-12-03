define('home:components/Lodash/omit.js', function(require, exports, module) {

  var arrayMap = require('home:components/Lodash/_arrayMap.js'),
      baseDifference = require('home:components/Lodash/_baseDifference.js'),
      baseFlatten = require('home:components/Lodash/_baseFlatten.js'),
      basePick = require('home:components/Lodash/_basePick.js'),
      keysIn = require('home:components/Lodash/keysIn.js'),
      rest = require('home:components/Lodash/rest.js');
  
  /**
   * The opposite of `_.pick`; this method creates an object composed of the
   * own and inherited enumerable properties of `object` that are not omitted.
   *
   * @static
   * @memberOf _
   * @category Object
   * @param {Object} object The source object.
   * @param {...(string|string[])} [props] The property names to omit, specified
   *  individually or in arrays.
   * @returns {Object} Returns the new object.
   * @example
   *
   * var object = { 'a': 1, 'b': '2', 'c': 3 };
   *
   * _.omit(object, ['a', 'c']);
   * // => { 'b': '2' }
   */
  var omit = rest(function(object, props) {
    if (object == null) {
      return {};
    }
    props = arrayMap(baseFlatten(props, 1), String);
    return basePick(object, baseDifference(keysIn(object), props));
  });
  
  module.exports = omit;
  

});

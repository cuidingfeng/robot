define('home:components/Lodash/invert.js', function(require, exports, module) {

  var constant = require('home:components/Lodash/constant.js'),
      createInverter = require('home:components/Lodash/_createInverter.js'),
      identity = require('home:components/Lodash/identity.js');
  
  /**
   * Creates an object composed of the inverted keys and values of `object`.
   * If `object` contains duplicate values, subsequent values overwrite property
   * assignments of previous values.
   *
   * @static
   * @memberOf _
   * @category Object
   * @param {Object} object The object to invert.
   * @returns {Object} Returns the new inverted object.
   * @example
   *
   * var object = { 'a': 1, 'b': 2, 'c': 1 };
   *
   * _.invert(object);
   * // => { '1': 'c', '2': 'b' }
   */
  var invert = createInverter(function(result, value, key) {
    result[value] = key;
  }, constant(identity));
  
  module.exports = invert;
  

});

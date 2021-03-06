define('home:components/Lodash/capitalize.js', function(require, exports, module) {

  var toString = require('home:components/Lodash/toString.js'),
      upperFirst = require('home:components/Lodash/upperFirst.js');
  
  /**
   * Converts the first character of `string` to upper case and the remaining
   * to lower case.
   *
   * @static
   * @memberOf _
   * @category String
   * @param {string} [string=''] The string to capitalize.
   * @returns {string} Returns the capitalized string.
   * @example
   *
   * _.capitalize('FRED');
   * // => 'Fred'
   */
  function capitalize(string) {
    return upperFirst(toString(string).toLowerCase());
  }
  
  module.exports = capitalize;
  

});

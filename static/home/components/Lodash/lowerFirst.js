define('home:components/Lodash/lowerFirst.js', function(require, exports, module) {

  var createCaseFirst = require('home:components/Lodash/_createCaseFirst.js');
  
  /**
   * Converts the first character of `string` to lower case.
   *
   * @static
   * @memberOf _
   * @category String
   * @param {string} [string=''] The string to convert.
   * @returns {string} Returns the converted string.
   * @example
   *
   * _.lowerFirst('Fred');
   * // => 'fred'
   *
   * _.lowerFirst('FRED');
   * // => 'fRED'
   */
  var lowerFirst = createCaseFirst('toLowerCase');
  
  module.exports = lowerFirst;
  

});

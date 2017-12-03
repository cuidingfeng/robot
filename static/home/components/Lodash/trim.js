define('home:components/Lodash/trim.js', function(require, exports, module) {

  var charsEndIndex = require('home:components/Lodash/_charsEndIndex.js'),
      charsStartIndex = require('home:components/Lodash/_charsStartIndex.js'),
      stringToArray = require('home:components/Lodash/_stringToArray.js'),
      toString = require('home:components/Lodash/toString.js');
  
  /** Used to match leading and trailing whitespace. */
  var reTrim = /^\s+|\s+$/g;
  
  /**
   * Removes leading and trailing whitespace or specified characters from `string`.
   *
   * @static
   * @memberOf _
   * @category String
   * @param {string} [string=''] The string to trim.
   * @param {string} [chars=whitespace] The characters to trim.
   * @param- {Object} [guard] Enables use as an iteratee for functions like `_.map`.
   * @returns {string} Returns the trimmed string.
   * @example
   *
   * _.trim('  abc  ');
   * // => 'abc'
   *
   * _.trim('-_-abc-_-', '_-');
   * // => 'abc'
   *
   * _.map(['  foo  ', '  bar  '], _.trim);
   * // => ['foo', 'bar']
   */
  function trim(string, chars, guard) {
    string = toString(string);
    if (!string) {
      return string;
    }
    if (guard || chars === undefined) {
      return string.replace(reTrim, '');
    }
    chars = (chars + '');
    if (!chars) {
      return string;
    }
    var strSymbols = stringToArray(string),
        chrSymbols = stringToArray(chars);
  
    return strSymbols
      .slice(charsStartIndex(strSymbols, chrSymbols), charsEndIndex(strSymbols, chrSymbols) + 1)
      .join('');
  }
  
  module.exports = trim;
  

});

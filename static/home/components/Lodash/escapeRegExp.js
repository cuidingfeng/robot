define('home:components/Lodash/escapeRegExp.js', function(require, exports, module) {

  var toString = require('home:components/Lodash/toString.js');
  
  /** Used to match `RegExp` [syntax characters](http://ecma-international.org/ecma-262/6.0/#sec-patterns). */
  var reRegExpChar = /[\\^$.*+?()[\]{}|]/g,
      reHasRegExpChar = RegExp(reRegExpChar.source);
  
  /**
   * Escapes the `RegExp` special characters "^", "$", "\", ".", "*", "+",
   * "?", "(", ")", "[", "]", "{", "}", and "|" in `string`.
   *
   * @static
   * @memberOf _
   * @category String
   * @param {string} [string=''] The string to escape.
   * @returns {string} Returns the escaped string.
   * @example
   *
   * _.escapeRegExp('[lodash](https://lodash.com/)');
   * // => '\[lodash\]\(https://lodash\.com/\)'
   */
  function escapeRegExp(string) {
    string = toString(string);
    return (string && reHasRegExpChar.test(string))
      ? string.replace(reRegExpChar, '\\$&')
      : string;
  }
  
  module.exports = escapeRegExp;
  

});
define('home:components/Lodash/lowerCase.js', function(require, exports, module) {

  var createCompounder = require('home:components/Lodash/_createCompounder.js');
  
  /**
   * Converts `string`, as space separated words, to lower case.
   *
   * @static
   * @memberOf _
   * @category String
   * @param {string} [string=''] The string to convert.
   * @returns {string} Returns the lower cased string.
   * @example
   *
   * _.lowerCase('--Foo-Bar');
   * // => 'foo bar'
   *
   * _.lowerCase('fooBar');
   * // => 'foo bar'
   *
   * _.lowerCase('__FOO_BAR__');
   * // => 'foo bar'
   */
  var lowerCase = createCompounder(function(result, word, index) {
    return result + (index ? ' ' : '') + word.toLowerCase();
  });
  
  module.exports = lowerCase;
  

});
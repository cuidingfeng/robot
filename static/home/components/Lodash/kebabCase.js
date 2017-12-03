define('home:components/Lodash/kebabCase.js', function(require, exports, module) {

  var createCompounder = require('home:components/Lodash/_createCompounder.js');
  
  /**
   * Converts `string` to [kebab case](https://en.wikipedia.org/wiki/Letter_case#Special_case_styles).
   *
   * @static
   * @memberOf _
   * @category String
   * @param {string} [string=''] The string to convert.
   * @returns {string} Returns the kebab cased string.
   * @example
   *
   * _.kebabCase('Foo Bar');
   * // => 'foo-bar'
   *
   * _.kebabCase('fooBar');
   * // => 'foo-bar'
   *
   * _.kebabCase('__foo_bar__');
   * // => 'foo-bar'
   */
  var kebabCase = createCompounder(function(result, word, index) {
    return result + (index ? '-' : '') + word.toLowerCase();
  });
  
  module.exports = kebabCase;
  

});

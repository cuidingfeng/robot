define('home:components/Lodash/_createCompounder.js', function(require, exports, module) {

  var arrayReduce = require('home:components/Lodash/_arrayReduce.js'),
      deburr = require('home:components/Lodash/deburr.js'),
      words = require('home:components/Lodash/words.js');
  
  /**
   * Creates a function like `_.camelCase`.
   *
   * @private
   * @param {Function} callback The function to combine each word.
   * @returns {Function} Returns the new compounder function.
   */
  function createCompounder(callback) {
    return function(string) {
      return arrayReduce(words(deburr(string)), callback, '');
    };
  }
  
  module.exports = createCompounder;
  

});

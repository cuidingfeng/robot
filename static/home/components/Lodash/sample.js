define('home:components/Lodash/sample.js', function(require, exports, module) {

  var baseRandom = require('home:components/Lodash/_baseRandom.js'),
      isArrayLike = require('home:components/Lodash/isArrayLike.js'),
      values = require('home:components/Lodash/values.js');
  
  /**
   * Gets a random element from `collection`.
   *
   * @static
   * @memberOf _
   * @category Collection
   * @param {Array|Object} collection The collection to sample.
   * @returns {*} Returns the random element.
   * @example
   *
   * _.sample([1, 2, 3, 4]);
   * // => 2
   */
  function sample(collection) {
    var array = isArrayLike(collection) ? collection : values(collection),
        length = array.length;
  
    return length > 0 ? array[baseRandom(0, length - 1)] : undefined;
  }
  
  module.exports = sample;
  

});

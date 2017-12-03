define('home:components/Lodash/_createAggregator.js', function(require, exports, module) {

  var arrayAggregator = require('home:components/Lodash/_arrayAggregator.js'),
      baseAggregator = require('home:components/Lodash/_baseAggregator.js'),
      baseIteratee = require('home:components/Lodash/_baseIteratee.js'),
      isArray = require('home:components/Lodash/isArray.js');
  
  /**
   * Creates a function like `_.groupBy`.
   *
   * @private
   * @param {Function} setter The function to set accumulator values.
   * @param {Function} [initializer] The accumulator object initializer.
   * @returns {Function} Returns the new aggregator function.
   */
  function createAggregator(setter, initializer) {
    return function(collection, iteratee) {
      var func = isArray(collection) ? arrayAggregator : baseAggregator,
          accumulator = initializer ? initializer() : {};
  
      return func(collection, setter, baseIteratee(iteratee), accumulator);
    };
  }
  
  module.exports = createAggregator;
  

});

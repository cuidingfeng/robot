define('home:components/Lodash/_baseEach.js', function(require, exports, module) {

  var baseForOwn = require('home:components/Lodash/_baseForOwn.js'),
      createBaseEach = require('home:components/Lodash/_createBaseEach.js');
  
  /**
   * The base implementation of `_.forEach` without support for iteratee shorthands.
   *
   * @private
   * @param {Array|Object} collection The collection to iterate over.
   * @param {Function} iteratee The function invoked per iteration.
   * @returns {Array|Object} Returns `collection`.
   */
  var baseEach = createBaseEach(baseForOwn);
  
  module.exports = baseEach;
  

});

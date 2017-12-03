define('home:components/Lodash/_baseEachRight.js', function(require, exports, module) {

  var baseForOwnRight = require('home:components/Lodash/_baseForOwnRight.js'),
      createBaseEach = require('home:components/Lodash/_createBaseEach.js');
  
  /**
   * The base implementation of `_.forEachRight` without support for iteratee shorthands.
   *
   * @private
   * @param {Array|Object} collection The collection to iterate over.
   * @param {Function} iteratee The function invoked per iteration.
   * @returns {Array|Object} Returns `collection`.
   */
  var baseEachRight = createBaseEach(baseForOwnRight, true);
  
  module.exports = baseEachRight;
  

});

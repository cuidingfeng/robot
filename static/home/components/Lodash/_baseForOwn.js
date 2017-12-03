define('home:components/Lodash/_baseForOwn.js', function(require, exports, module) {

  var baseFor = require('home:components/Lodash/_baseFor.js'),
      keys = require('home:components/Lodash/keys.js');
  
  /**
   * The base implementation of `_.forOwn` without support for iteratee shorthands.
   *
   * @private
   * @param {Object} object The object to iterate over.
   * @param {Function} iteratee The function invoked per iteration.
   * @returns {Object} Returns `object`.
   */
  function baseForOwn(object, iteratee) {
    return object && baseFor(object, iteratee, keys);
  }
  
  module.exports = baseForOwn;
  

});

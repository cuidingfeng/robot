define('home:components/Lodash/_createOver.js', function(require, exports, module) {

  var apply = require('home:components/Lodash/_apply.js'),
      arrayMap = require('home:components/Lodash/_arrayMap.js'),
      baseFlatten = require('home:components/Lodash/_baseFlatten.js'),
      baseIteratee = require('home:components/Lodash/_baseIteratee.js'),
      rest = require('home:components/Lodash/rest.js');
  
  /**
   * Creates a function like `_.over`.
   *
   * @private
   * @param {Function} arrayFunc The function to iterate over iteratees.
   * @returns {Function} Returns the new invoker function.
   */
  function createOver(arrayFunc) {
    return rest(function(iteratees) {
      iteratees = arrayMap(baseFlatten(iteratees, 1), baseIteratee);
      return rest(function(args) {
        var thisArg = this;
        return arrayFunc(iteratees, function(iteratee) {
          return apply(iteratee, thisArg, args);
        });
      });
    });
  }
  
  module.exports = createOver;
  

});

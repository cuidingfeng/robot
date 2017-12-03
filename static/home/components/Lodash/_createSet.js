define('home:components/Lodash/_createSet.js', function(require, exports, module) {

  var Set = require('home:components/Lodash/_Set.js'),
      noop = require('home:components/Lodash/noop.js');
  
  /**
   * Creates a set of `values`.
   *
   * @private
   * @param {Array} values The values to add to the set.
   * @returns {Object} Returns the new set.
   */
  var createSet = !(Set && new Set([1, 2]).size === 2) ? noop : function(values) {
    return new Set(values);
  };
  
  module.exports = createSet;
  

});

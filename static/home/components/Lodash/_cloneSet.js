define('home:components/Lodash/_cloneSet.js', function(require, exports, module) {

  var addSetEntry = require('home:components/Lodash/_addSetEntry.js'),
      arrayReduce = require('home:components/Lodash/_arrayReduce.js'),
      setToArray = require('home:components/Lodash/_setToArray.js');
  
  /**
   * Creates a clone of `set`.
   *
   * @private
   * @param {Object} set The set to clone.
   * @returns {Object} Returns the cloned set.
   */
  function cloneSet(set) {
    return arrayReduce(setToArray(set), addSetEntry, new set.constructor);
  }
  
  module.exports = cloneSet;
  

});

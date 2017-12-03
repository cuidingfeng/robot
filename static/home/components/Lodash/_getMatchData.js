define('home:components/Lodash/_getMatchData.js', function(require, exports, module) {

  var isStrictComparable = require('home:components/Lodash/_isStrictComparable.js'),
      toPairs = require('home:components/Lodash/toPairs.js');
  
  /**
   * Gets the property names, values, and compare flags of `object`.
   *
   * @private
   * @param {Object} object The object to query.
   * @returns {Array} Returns the match data of `object`.
   */
  function getMatchData(object) {
    var result = toPairs(object),
        length = result.length;
  
    while (length--) {
      result[length][2] = isStrictComparable(result[length][1]);
    }
    return result;
  }
  
  module.exports = getMatchData;
  

});

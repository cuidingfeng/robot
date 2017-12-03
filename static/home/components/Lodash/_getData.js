define('home:components/Lodash/_getData.js', function(require, exports, module) {

  var metaMap = require('home:components/Lodash/_metaMap.js'),
      noop = require('home:components/Lodash/noop.js');
  
  /**
   * Gets metadata for `func`.
   *
   * @private
   * @param {Function} func The function to query.
   * @returns {*} Returns the metadata for `func`.
   */
  var getData = !metaMap ? noop : function(func) {
    return metaMap.get(func);
  };
  
  module.exports = getData;
  

});

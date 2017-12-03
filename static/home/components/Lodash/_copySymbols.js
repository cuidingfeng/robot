define('home:components/Lodash/_copySymbols.js', function(require, exports, module) {

  var copyObject = require('home:components/Lodash/_copyObject.js'),
      getSymbols = require('home:components/Lodash/_getSymbols.js');
  
  /**
   * Copies own symbol properties of `source` to `object`.
   *
   * @private
   * @param {Object} source The object to copy symbols from.
   * @param {Object} [object={}] The object to copy symbols to.
   * @returns {Object} Returns `object`.
   */
  function copySymbols(source, object) {
    return copyObject(source, getSymbols(source), object);
  }
  
  module.exports = copySymbols;
  

});

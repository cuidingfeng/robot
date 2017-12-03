define('home:components/Lodash/_isLaziable.js', function(require, exports, module) {

  var LazyWrapper = require('home:components/Lodash/_LazyWrapper.js'),
      getData = require('home:components/Lodash/_getData.js'),
      getFuncName = require('home:components/Lodash/_getFuncName.js'),
      lodash = require('home:components/Lodash/wrapperLodash.js');
  
  /**
   * Checks if `func` has a lazy counterpart.
   *
   * @private
   * @param {Function} func The function to check.
   * @returns {boolean} Returns `true` if `func` has a lazy counterpart, else `false`.
   */
  function isLaziable(func) {
    var funcName = getFuncName(func),
        other = lodash[funcName];
  
    if (typeof other != 'function' || !(funcName in LazyWrapper.prototype)) {
      return false;
    }
    if (func === other) {
      return true;
    }
    var data = getData(other);
    return !!data && func === data[0];
  }
  
  module.exports = isLaziable;
  

});

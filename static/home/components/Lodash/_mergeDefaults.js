define('home:components/Lodash/_mergeDefaults.js', function(require, exports, module) {

  var baseMerge = require('home:components/Lodash/_baseMerge.js'),
      isObject = require('home:components/Lodash/isObject.js');
  
  /**
   * Used by `_.defaultsDeep` to customize its `_.merge` use.
   *
   * @private
   * @param {*} objValue The destination value.
   * @param {*} srcValue The source value.
   * @param {string} key The key of the property to merge.
   * @param {Object} object The parent object of `objValue`.
   * @param {Object} source The parent object of `srcValue`.
   * @param {Object} [stack] Tracks traversed source values and their merged counterparts.
   * @returns {*} Returns the value to assign.
   */
  function mergeDefaults(objValue, srcValue, key, object, source, stack) {
    if (isObject(objValue) && isObject(srcValue)) {
      baseMerge(objValue, srcValue, undefined, mergeDefaults, stack.set(srcValue, objValue));
    }
    return objValue;
  }
  
  module.exports = mergeDefaults;
  

});

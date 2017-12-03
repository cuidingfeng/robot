define('home:components/Lodash/_baseMergeDeep.js', function(require, exports, module) {

  var assignMergeValue = require('home:components/Lodash/_assignMergeValue.js'),
      baseClone = require('home:components/Lodash/_baseClone.js'),
      copyArray = require('home:components/Lodash/_copyArray.js'),
      isArguments = require('home:components/Lodash/isArguments.js'),
      isArray = require('home:components/Lodash/isArray.js'),
      isArrayLikeObject = require('home:components/Lodash/isArrayLikeObject.js'),
      isFunction = require('home:components/Lodash/isFunction.js'),
      isObject = require('home:components/Lodash/isObject.js'),
      isPlainObject = require('home:components/Lodash/isPlainObject.js'),
      isTypedArray = require('home:components/Lodash/isTypedArray.js'),
      toPlainObject = require('home:components/Lodash/toPlainObject.js');
  
  /**
   * A specialized version of `baseMerge` for arrays and objects which performs
   * deep merges and tracks traversed objects enabling objects with circular
   * references to be merged.
   *
   * @private
   * @param {Object} object The destination object.
   * @param {Object} source The source object.
   * @param {string} key The key of the value to merge.
   * @param {number} srcIndex The index of `source`.
   * @param {Function} mergeFunc The function to merge values.
   * @param {Function} [customizer] The function to customize assigned values.
   * @param {Object} [stack] Tracks traversed source values and their merged counterparts.
   */
  function baseMergeDeep(object, source, key, srcIndex, mergeFunc, customizer, stack) {
    var objValue = object[key],
        srcValue = source[key],
        stacked = stack.get(srcValue);
  
    if (stacked) {
      assignMergeValue(object, key, stacked);
      return;
    }
    var newValue = customizer
      ? customizer(objValue, srcValue, (key + ''), object, source, stack)
      : undefined;
  
    var isCommon = newValue === undefined;
  
    if (isCommon) {
      newValue = srcValue;
      if (isArray(srcValue) || isTypedArray(srcValue)) {
        if (isArray(objValue)) {
          newValue = objValue;
        }
        else if (isArrayLikeObject(objValue)) {
          newValue = copyArray(objValue);
        }
        else {
          isCommon = false;
          newValue = baseClone(srcValue, !customizer);
        }
      }
      else if (isPlainObject(srcValue) || isArguments(srcValue)) {
        if (isArguments(objValue)) {
          newValue = toPlainObject(objValue);
        }
        else if (!isObject(objValue) || (srcIndex && isFunction(objValue))) {
          isCommon = false;
          newValue = baseClone(srcValue, !customizer);
        }
        else {
          newValue = objValue;
        }
      }
      else {
        isCommon = false;
      }
    }
    stack.set(srcValue, newValue);
  
    if (isCommon) {
      // Recursively merge objects and arrays (susceptible to call stack limits).
      mergeFunc(newValue, srcValue, srcIndex, customizer, stack);
    }
    stack['delete'](srcValue);
    assignMergeValue(object, key, newValue);
  }
  
  module.exports = baseMergeDeep;
  

});

define('home:components/Lodash/_baseIsEqualDeep.js', function(require, exports, module) {

  var Stack = require('home:components/Lodash/_Stack.js'),
      equalArrays = require('home:components/Lodash/_equalArrays.js'),
      equalByTag = require('home:components/Lodash/_equalByTag.js'),
      equalObjects = require('home:components/Lodash/_equalObjects.js'),
      getTag = require('home:components/Lodash/_getTag.js'),
      isArray = require('home:components/Lodash/isArray.js'),
      isHostObject = require('home:components/Lodash/_isHostObject.js'),
      isTypedArray = require('home:components/Lodash/isTypedArray.js');
  
  /** Used to compose bitmasks for comparison styles. */
  var PARTIAL_COMPARE_FLAG = 2;
  
  /** `Object#toString` result references. */
  var argsTag = '[object Arguments]',
      arrayTag = '[object Array]',
      objectTag = '[object Object]';
  
  /** Used for built-in method references. */
  var objectProto = Object.prototype;
  
  /** Used to check objects for own properties. */
  var hasOwnProperty = objectProto.hasOwnProperty;
  
  /**
   * A specialized version of `baseIsEqual` for arrays and objects which performs
   * deep comparisons and tracks traversed objects enabling objects with circular
   * references to be compared.
   *
   * @private
   * @param {Object} object The object to compare.
   * @param {Object} other The other object to compare.
   * @param {Function} equalFunc The function to determine equivalents of values.
   * @param {Function} [customizer] The function to customize comparisons.
   * @param {number} [bitmask] The bitmask of comparison flags. See `baseIsEqual` for more details.
   * @param {Object} [stack] Tracks traversed `object` and `other` objects.
   * @returns {boolean} Returns `true` if the objects are equivalent, else `false`.
   */
  function baseIsEqualDeep(object, other, equalFunc, customizer, bitmask, stack) {
    var objIsArr = isArray(object),
        othIsArr = isArray(other),
        objTag = arrayTag,
        othTag = arrayTag;
  
    if (!objIsArr) {
      objTag = getTag(object);
      objTag = objTag == argsTag ? objectTag : objTag;
    }
    if (!othIsArr) {
      othTag = getTag(other);
      othTag = othTag == argsTag ? objectTag : othTag;
    }
    var objIsObj = objTag == objectTag && !isHostObject(object),
        othIsObj = othTag == objectTag && !isHostObject(other),
        isSameTag = objTag == othTag;
  
    if (isSameTag && !objIsObj) {
      stack || (stack = new Stack);
      return (objIsArr || isTypedArray(object))
        ? equalArrays(object, other, equalFunc, customizer, bitmask, stack)
        : equalByTag(object, other, objTag, equalFunc, customizer, bitmask, stack);
    }
    if (!(bitmask & PARTIAL_COMPARE_FLAG)) {
      var objIsWrapped = objIsObj && hasOwnProperty.call(object, '__wrapped__'),
          othIsWrapped = othIsObj && hasOwnProperty.call(other, '__wrapped__');
  
      if (objIsWrapped || othIsWrapped) {
        stack || (stack = new Stack);
        return equalFunc(objIsWrapped ? object.value() : object, othIsWrapped ? other.value() : other, customizer, bitmask, stack);
      }
    }
    if (!isSameTag) {
      return false;
    }
    stack || (stack = new Stack);
    return equalObjects(object, other, equalFunc, customizer, bitmask, stack);
  }
  
  module.exports = baseIsEqualDeep;
  

});

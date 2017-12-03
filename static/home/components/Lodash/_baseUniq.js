define('home:components/Lodash/_baseUniq.js', function(require, exports, module) {

  var SetCache = require('home:components/Lodash/_SetCache.js'),
      arrayIncludes = require('home:components/Lodash/_arrayIncludes.js'),
      arrayIncludesWith = require('home:components/Lodash/_arrayIncludesWith.js'),
      cacheHas = require('home:components/Lodash/_cacheHas.js'),
      createSet = require('home:components/Lodash/_createSet.js'),
      setToArray = require('home:components/Lodash/_setToArray.js');
  
  /** Used as the size to enable large array optimizations. */
  var LARGE_ARRAY_SIZE = 200;
  
  /**
   * The base implementation of `_.uniqBy` without support for iteratee shorthands.
   *
   * @private
   * @param {Array} array The array to inspect.
   * @param {Function} [iteratee] The iteratee invoked per element.
   * @param {Function} [comparator] The comparator invoked per element.
   * @returns {Array} Returns the new duplicate free array.
   */
  function baseUniq(array, iteratee, comparator) {
    var index = -1,
        includes = arrayIncludes,
        length = array.length,
        isCommon = true,
        result = [],
        seen = result;
  
    if (comparator) {
      isCommon = false;
      includes = arrayIncludesWith;
    }
    else if (length >= LARGE_ARRAY_SIZE) {
      var set = iteratee ? null : createSet(array);
      if (set) {
        return setToArray(set);
      }
      isCommon = false;
      includes = cacheHas;
      seen = new SetCache;
    }
    else {
      seen = iteratee ? [] : result;
    }
    outer:
    while (++index < length) {
      var value = array[index],
          computed = iteratee ? iteratee(value) : value;
  
      if (isCommon && computed === computed) {
        var seenIndex = seen.length;
        while (seenIndex--) {
          if (seen[seenIndex] === computed) {
            continue outer;
          }
        }
        if (iteratee) {
          seen.push(computed);
        }
        result.push(value);
      }
      else if (!includes(seen, computed, comparator)) {
        if (seen !== result) {
          seen.push(computed);
        }
        result.push(value);
      }
    }
    return result;
  }
  
  module.exports = baseUniq;
  

});

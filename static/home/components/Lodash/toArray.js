define('home:components/Lodash/toArray.js', function(require, exports, module) {

  var Symbol = require('home:components/Lodash/_Symbol.js'),
      copyArray = require('home:components/Lodash/_copyArray.js'),
      getTag = require('home:components/Lodash/_getTag.js'),
      isArrayLike = require('home:components/Lodash/isArrayLike.js'),
      isString = require('home:components/Lodash/isString.js'),
      iteratorToArray = require('home:components/Lodash/_iteratorToArray.js'),
      mapToArray = require('home:components/Lodash/_mapToArray.js'),
      setToArray = require('home:components/Lodash/_setToArray.js'),
      stringToArray = require('home:components/Lodash/_stringToArray.js'),
      values = require('home:components/Lodash/values.js');
  
  /** `Object#toString` result references. */
  var mapTag = '[object Map]',
      setTag = '[object Set]';
  
  /** Built-in value references. */
  var iteratorSymbol = typeof (iteratorSymbol = Symbol && Symbol.iterator) == 'symbol' ? iteratorSymbol : undefined;
  
  /**
   * Converts `value` to an array.
   *
   * @static
   * @memberOf _
   * @category Lang
   * @param {*} value The value to convert.
   * @returns {Array} Returns the converted array.
   * @example
   *
   * _.toArray({ 'a': 1, 'b': 2 });
   * // => [1, 2]
   *
   * _.toArray('abc');
   * // => ['a', 'b', 'c']
   *
   * _.toArray(1);
   * // => []
   *
   * _.toArray(null);
   * // => []
   */
  function toArray(value) {
    if (!value) {
      return [];
    }
    if (isArrayLike(value)) {
      return isString(value) ? stringToArray(value) : copyArray(value);
    }
    if (iteratorSymbol && value[iteratorSymbol]) {
      return iteratorToArray(value[iteratorSymbol]());
    }
    var tag = getTag(value),
        func = tag == mapTag ? mapToArray : (tag == setTag ? setToArray : values);
  
    return func(value);
  }
  
  module.exports = toArray;
  

});

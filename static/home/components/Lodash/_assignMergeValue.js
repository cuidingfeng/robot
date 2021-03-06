define('home:components/Lodash/_assignMergeValue.js', function(require, exports, module) {

  var eq = require('home:components/Lodash/eq.js');
  
  /**
   * This function is like `assignValue` except that it doesn't assign
   * `undefined` values.
   *
   * @private
   * @param {Object} object The object to modify.
   * @param {string} key The key of the property to assign.
   * @param {*} value The value to assign.
   */
  function assignMergeValue(object, key, value) {
    if ((value !== undefined && !eq(object[key], value)) ||
        (typeof key == 'number' && value === undefined && !(key in object))) {
      object[key] = value;
    }
  }
  
  module.exports = assignMergeValue;
  

});

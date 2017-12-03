define('home:components/Lodash/zipObject.js', function(require, exports, module) {

  var assignValue = require('home:components/Lodash/_assignValue.js'),
      baseZipObject = require('home:components/Lodash/_baseZipObject.js');
  
  /**
   * This method is like `_.fromPairs` except that it accepts two arrays,
   * one of property names and one of corresponding values.
   *
   * @static
   * @memberOf _
   * @category Array
   * @param {Array} [props=[]] The property names.
   * @param {Array} [values=[]] The property values.
   * @returns {Object} Returns the new object.
   * @example
   *
   * _.zipObject(['a', 'b'], [1, 2]);
   * // => { 'a': 1, 'b': 2 }
   */
  function zipObject(props, values) {
    return baseZipObject(props || [], values || [], assignValue);
  }
  
  module.exports = zipObject;
  

});

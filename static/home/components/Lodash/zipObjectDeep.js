define('home:components/Lodash/zipObjectDeep.js', function(require, exports, module) {

  var baseSet = require('home:components/Lodash/_baseSet.js'),
      baseZipObject = require('home:components/Lodash/_baseZipObject.js');
  
  /**
   * This method is like `_.zipObject` except that it supports property paths.
   *
   * @static
   * @memberOf _
   * @category Array
   * @param {Array} [props=[]] The property names.
   * @param {Array} [values=[]] The property values.
   * @returns {Object} Returns the new object.
   * @example
   *
   * _.zipObjectDeep(['a.b[0].c', 'a.b[1].d'], [1, 2]);
   * // => { 'a': { 'b': [{ 'c': 1 }, { 'd': 2 }] } }
   */
  function zipObjectDeep(props, values) {
    return baseZipObject(props || [], values || [], baseSet);
  }
  
  module.exports = zipObjectDeep;
  

});
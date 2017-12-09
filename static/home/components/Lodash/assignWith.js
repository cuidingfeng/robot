define('home:components/Lodash/assignWith.js', function(require, exports, module) {

  var copyObjectWith = require('home:components/Lodash/_copyObjectWith.js'),
      createAssigner = require('home:components/Lodash/_createAssigner.js'),
      keys = require('home:components/Lodash/keys.js');
  
  /**
   * This method is like `_.assign` except that it accepts `customizer` which
   * is invoked to produce the assigned values. If `customizer` returns `undefined`
   * assignment is handled by the method instead. The `customizer` is invoked
   * with five arguments: (objValue, srcValue, key, object, source).
   *
   * **Note:** This method mutates `object`.
   *
   * @static
   * @memberOf _
   * @category Object
   * @param {Object} object The destination object.
   * @param {...Object} sources The source objects.
   * @param {Function} [customizer] The function to customize assigned values.
   * @returns {Object} Returns `object`.
   * @example
   *
   * function customizer(objValue, srcValue) {
   *   return _.isUndefined(objValue) ? srcValue : objValue;
   * }
   *
   * var defaults = _.partialRight(_.assignWith, customizer);
   *
   * defaults({ 'a': 1 }, { 'b': 2 }, { 'a': 3 });
   * // => { 'a': 1, 'b': 2 }
   */
  var assignWith = createAssigner(function(object, source, srcIndex, customizer) {
    copyObjectWith(source, keys(source), object, customizer);
  });
  
  module.exports = assignWith;
  

});
define('home:components/Lodash/defaults.js', function(require, exports, module) {

  var apply = require('home:components/Lodash/_apply.js'),
      assignInDefaults = require('home:components/Lodash/_assignInDefaults.js'),
      assignInWith = require('home:components/Lodash/assignInWith.js'),
      rest = require('home:components/Lodash/rest.js');
  
  /**
   * Assigns own and inherited enumerable properties of source objects to the
   * destination object for all destination properties that resolve to `undefined`.
   * Source objects are applied from left to right. Once a property is set,
   * additional values of the same property are ignored.
   *
   * **Note:** This method mutates `object`.
   *
   * @static
   * @memberOf _
   * @category Object
   * @param {Object} object The destination object.
   * @param {...Object} [sources] The source objects.
   * @returns {Object} Returns `object`.
   * @example
   *
   * _.defaults({ 'user': 'barney' }, { 'age': 36 }, { 'user': 'fred' });
   * // => { 'user': 'barney', 'age': 36 }
   */
  var defaults = rest(function(args) {
    args.push(undefined, assignInDefaults);
    return apply(assignInWith, undefined, args);
  });
  
  module.exports = defaults;
  

});

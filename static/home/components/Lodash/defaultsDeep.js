define('home:components/Lodash/defaultsDeep.js', function(require, exports, module) {

  var apply = require('home:components/Lodash/_apply.js'),
      mergeDefaults = require('home:components/Lodash/_mergeDefaults.js'),
      mergeWith = require('home:components/Lodash/mergeWith.js'),
      rest = require('home:components/Lodash/rest.js');
  
  /**
   * This method is like `_.defaults` except that it recursively assigns
   * default properties.
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
   * _.defaultsDeep({ 'user': { 'name': 'barney' } }, { 'user': { 'name': 'fred', 'age': 36 } });
   * // => { 'user': { 'name': 'barney', 'age': 36 } }
   *
   */
  var defaultsDeep = rest(function(args) {
    args.push(undefined, mergeDefaults);
    return apply(mergeWith, undefined, args);
  });
  
  module.exports = defaultsDeep;
  

});

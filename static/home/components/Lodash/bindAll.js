define('home:components/Lodash/bindAll.js', function(require, exports, module) {

  var arrayEach = require('home:components/Lodash/_arrayEach.js'),
      baseFlatten = require('home:components/Lodash/_baseFlatten.js'),
      bind = require('home:components/Lodash/bind.js'),
      rest = require('home:components/Lodash/rest.js');
  
  /**
   * Binds methods of an object to the object itself, overwriting the existing
   * method.
   *
   * **Note:** This method doesn't set the "length" property of bound functions.
   *
   * @static
   * @memberOf _
   * @category Util
   * @param {Object} object The object to bind and assign the bound methods to.
   * @param {...(string|string[])} methodNames The object method names to bind,
   *  specified individually or in arrays.
   * @returns {Object} Returns `object`.
   * @example
   *
   * var view = {
   *   'label': 'docs',
   *   'onClick': function() {
   *     console.log('clicked ' + this.label);
   *   }
   * };
   *
   * _.bindAll(view, 'onClick');
   * jQuery(element).on('click', view.onClick);
   * // => logs 'clicked docs' when clicked
   */
  var bindAll = rest(function(object, methodNames) {
    arrayEach(baseFlatten(methodNames, 1), function(key) {
      object[key] = bind(object[key], object);
    });
    return object;
  });
  
  module.exports = bindAll;
  

});

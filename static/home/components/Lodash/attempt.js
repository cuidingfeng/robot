define('home:components/Lodash/attempt.js', function(require, exports, module) {

  var apply = require('home:components/Lodash/_apply.js'),
      isError = require('home:components/Lodash/isError.js'),
      rest = require('home:components/Lodash/rest.js');
  
  /**
   * Attempts to invoke `func`, returning either the result or the caught error
   * object. Any additional arguments are provided to `func` when it's invoked.
   *
   * @static
   * @memberOf _
   * @category Util
   * @param {Function} func The function to attempt.
   * @returns {*} Returns the `func` result or error object.
   * @example
   *
   * // Avoid throwing errors for invalid selectors.
   * var elements = _.attempt(function(selector) {
   *   return document.querySelectorAll(selector);
   * }, '>_>');
   *
   * if (_.isError(elements)) {
   *   elements = [];
   * }
   */
  var attempt = rest(function(func, args) {
    try {
      return apply(func, undefined, args);
    } catch (e) {
      return isError(e) ? e : new Error(e);
    }
  });
  
  module.exports = attempt;
  

});

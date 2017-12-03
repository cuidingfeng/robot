define('home:components/Lodash/_getPlaceholder.js', function(require, exports, module) {

  /**
   * Gets the argument placeholder value for `func`.
   *
   * @private
   * @param {Function} func The function to inspect.
   * @returns {*} Returns the placeholder value.
   */
  function getPlaceholder(func) {
    var object = func;
    return object.placeholder;
  }
  
  module.exports = getPlaceholder;
  

});

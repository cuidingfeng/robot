define('home:components/Lodash/_arrayIncludesWith.js', function(require, exports, module) {

  /**
   * This function is like `arrayIncludes` except that it accepts a comparator.
   *
   * @private
   * @param {Array} array The array to search.
   * @param {*} target The value to search for.
   * @param {Function} comparator The comparator invoked per element.
   * @returns {boolean} Returns `true` if `target` is found, else `false`.
   */
  function arrayIncludesWith(array, value, comparator) {
    var index = -1,
        length = array.length;
  
    while (++index < length) {
      if (comparator(value, array[index])) {
        return true;
      }
    }
    return false;
  }
  
  module.exports = arrayIncludesWith;
  

});

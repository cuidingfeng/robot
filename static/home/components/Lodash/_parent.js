define('home:components/Lodash/_parent.js', function(require, exports, module) {

  var baseSlice = require('home:components/Lodash/_baseSlice.js'),
      get = require('home:components/Lodash/get.js');
  
  /**
   * Gets the parent value at `path` of `object`.
   *
   * @private
   * @param {Object} object The object to query.
   * @param {Array} path The path to get the parent value of.
   * @returns {*} Returns the parent value.
   */
  function parent(object, path) {
    return path.length == 1 ? object : get(object, baseSlice(path, 0, -1));
  }
  
  module.exports = parent;
  

});

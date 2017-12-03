define('home:components/Lodash/_baseIteratee.js', function(require, exports, module) {

  var baseMatches = require('home:components/Lodash/_baseMatches.js'),
      baseMatchesProperty = require('home:components/Lodash/_baseMatchesProperty.js'),
      identity = require('home:components/Lodash/identity.js'),
      isArray = require('home:components/Lodash/isArray.js'),
      property = require('home:components/Lodash/property.js');
  
  /**
   * The base implementation of `_.iteratee`.
   *
   * @private
   * @param {*} [value=_.identity] The value to convert to an iteratee.
   * @returns {Function} Returns the iteratee.
   */
  function baseIteratee(value) {
    var type = typeof value;
    if (type == 'function') {
      return value;
    }
    if (value == null) {
      return identity;
    }
    if (type == 'object') {
      return isArray(value)
        ? baseMatchesProperty(value[0], value[1])
        : baseMatches(value);
    }
    return property(value);
  }
  
  module.exports = baseIteratee;
  

});

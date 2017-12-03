define('home:components/Lodash/_baseOrderBy.js', function(require, exports, module) {

  var arrayMap = require('home:components/Lodash/_arrayMap.js'),
      baseIteratee = require('home:components/Lodash/_baseIteratee.js'),
      baseMap = require('home:components/Lodash/_baseMap.js'),
      baseSortBy = require('home:components/Lodash/_baseSortBy.js'),
      compareMultiple = require('home:components/Lodash/_compareMultiple.js');
  
  /**
   * The base implementation of `_.orderBy` without param guards.
   *
   * @private
   * @param {Array|Object} collection The collection to iterate over.
   * @param {Function[]|Object[]|string[]} iteratees The iteratees to sort by.
   * @param {string[]} orders The sort orders of `iteratees`.
   * @returns {Array} Returns the new sorted array.
   */
  function baseOrderBy(collection, iteratees, orders) {
    var index = -1;
    iteratees = arrayMap(iteratees.length ? iteratees : Array(1), baseIteratee);
  
    var result = baseMap(collection, function(value, key, collection) {
      var criteria = arrayMap(iteratees, function(iteratee) {
        return iteratee(value);
      });
      return { 'criteria': criteria, 'index': ++index, 'value': value };
    });
  
    return baseSortBy(result, function(object, other) {
      return compareMultiple(object, other, orders);
    });
  }
  
  module.exports = baseOrderBy;
  

});

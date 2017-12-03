define('home:components/Lodash/result.js', function(require, exports, module) {

  var baseCastPath = require('home:components/Lodash/_baseCastPath.js'),
      get = require('home:components/Lodash/get.js'),
      isFunction = require('home:components/Lodash/isFunction.js'),
      isKey = require('home:components/Lodash/_isKey.js'),
      parent = require('home:components/Lodash/_parent.js');
  
  /**
   * This method is like `_.get` except that if the resolved value is a function
   * it's invoked with the `this` binding of its parent object and its result
   * is returned.
   *
   * @static
   * @memberOf _
   * @category Object
   * @param {Object} object The object to query.
   * @param {Array|string} path The path of the property to resolve.
   * @param {*} [defaultValue] The value returned if the resolved value is `undefined`.
   * @returns {*} Returns the resolved value.
   * @example
   *
   * var object = { 'a': [{ 'b': { 'c1': 3, 'c2': _.constant(4) } }] };
   *
   * _.result(object, 'a[0].b.c1');
   * // => 3
   *
   * _.result(object, 'a[0].b.c2');
   * // => 4
   *
   * _.result(object, 'a[0].b.c3', 'default');
   * // => 'default'
   *
   * _.result(object, 'a[0].b.c3', _.constant('default'));
   * // => 'default'
   */
  function result(object, path, defaultValue) {
    if (!isKey(path, object)) {
      path = baseCastPath(path);
      var result = get(object, path);
      object = parent(object, path);
    } else {
      result = object == null ? undefined : object[path];
    }
    if (result === undefined) {
      result = defaultValue;
    }
    return isFunction(result) ? result.call(object) : result;
  }
  
  module.exports = result;
  

});

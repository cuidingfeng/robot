define('home:components/Lodash/_Stack.js', function(require, exports, module) {

  var stackClear = require('home:components/Lodash/_stackClear.js'),
      stackDelete = require('home:components/Lodash/_stackDelete.js'),
      stackGet = require('home:components/Lodash/_stackGet.js'),
      stackHas = require('home:components/Lodash/_stackHas.js'),
      stackSet = require('home:components/Lodash/_stackSet.js');
  
  /**
   * Creates a stack cache object to store key-value pairs.
   *
   * @private
   * @constructor
   * @param {Array} [values] The values to cache.
   */
  function Stack(values) {
    var index = -1,
        length = values ? values.length : 0;
  
    this.clear();
    while (++index < length) {
      var entry = values[index];
      this.set(entry[0], entry[1]);
    }
  }
  
  // Add functions to the `Stack` cache.
  Stack.prototype.clear = stackClear;
  Stack.prototype['delete'] = stackDelete;
  Stack.prototype.get = stackGet;
  Stack.prototype.has = stackHas;
  Stack.prototype.set = stackSet;
  
  module.exports = Stack;
  

});

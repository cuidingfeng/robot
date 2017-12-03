define('home:components/Lodash/_LodashWrapper.js', function(require, exports, module) {

  var baseCreate = require('home:components/Lodash/_baseCreate.js'),
      baseLodash = require('home:components/Lodash/_baseLodash.js');
  
  /**
   * The base constructor for creating `lodash` wrapper objects.
   *
   * @private
   * @param {*} value The value to wrap.
   * @param {boolean} [chainAll] Enable chaining for all wrapper methods.
   */
  function LodashWrapper(value, chainAll) {
    this.__wrapped__ = value;
    this.__actions__ = [];
    this.__chain__ = !!chainAll;
    this.__index__ = 0;
    this.__values__ = undefined;
  }
  
  LodashWrapper.prototype = baseCreate(baseLodash.prototype);
  LodashWrapper.prototype.constructor = LodashWrapper;
  
  module.exports = LodashWrapper;
  

});

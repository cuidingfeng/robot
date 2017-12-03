define('home:components/Lodash/_baseWrapperValue.js', function(require, exports, module) {

  var LazyWrapper = require('home:components/Lodash/_LazyWrapper.js'),
      arrayPush = require('home:components/Lodash/_arrayPush.js'),
      arrayReduce = require('home:components/Lodash/_arrayReduce.js');
  
  /**
   * The base implementation of `wrapperValue` which returns the result of
   * performing a sequence of actions on the unwrapped `value`, where each
   * successive action is supplied the return value of the previous.
   *
   * @private
   * @param {*} value The unwrapped value.
   * @param {Array} actions Actions to perform to resolve the unwrapped value.
   * @returns {*} Returns the resolved value.
   */
  function baseWrapperValue(value, actions) {
    var result = value;
    if (result instanceof LazyWrapper) {
      result = result.value();
    }
    return arrayReduce(actions, function(result, action) {
      return action.func.apply(action.thisArg, arrayPush([result], action.args));
    }, result);
  }
  
  module.exports = baseWrapperValue;
  

});

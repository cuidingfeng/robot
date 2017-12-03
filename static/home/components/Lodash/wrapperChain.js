define('home:components/Lodash/wrapperChain.js', function(require, exports, module) {

  var chain = require('home:components/Lodash/chain.js');
  
  /**
   * Enables explicit method chaining on the wrapper object.
   *
   * @name chain
   * @memberOf _
   * @category Seq
   * @returns {Object} Returns the new `lodash` wrapper instance.
   * @example
   *
   * var users = [
   *   { 'user': 'barney', 'age': 36 },
   *   { 'user': 'fred',   'age': 40 }
   * ];
   *
   * // A sequence without explicit chaining.
   * _(users).head();
   * // => { 'user': 'barney', 'age': 36 }
   *
   * // A sequence with explicit chaining.
   * _(users)
   *   .chain()
   *   .head()
   *   .pick('user')
   *   .value();
   * // => { 'user': 'barney' }
   */
  function wrapperChain() {
    return chain(this);
  }
  
  module.exports = wrapperChain;
  

});

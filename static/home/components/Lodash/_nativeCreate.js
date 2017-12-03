define('home:components/Lodash/_nativeCreate.js', function(require, exports, module) {

  var getNative = require('home:components/Lodash/_getNative.js');
  
  /* Built-in method references that are verified to be native. */
  var nativeCreate = getNative(Object, 'create');
  
  module.exports = nativeCreate;
  

});

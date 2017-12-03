define('home:components/Lodash/_WeakMap.js', function(require, exports, module) {

  var getNative = require('home:components/Lodash/_getNative.js'),
      root = require('home:components/Lodash/_root.js');
  
  /* Built-in method references that are verified to be native. */
  var WeakMap = getNative(root, 'WeakMap');
  
  module.exports = WeakMap;
  

});

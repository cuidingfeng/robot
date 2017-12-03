define('home:components/Lodash/_metaMap.js', function(require, exports, module) {

  var WeakMap = require('home:components/Lodash/_WeakMap.js');
  
  /** Used to store function metadata. */
  var metaMap = WeakMap && new WeakMap;
  
  module.exports = metaMap;
  

});

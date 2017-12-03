define('home:components/Lodash/_reInterpolate.js', function(require, exports, module) {

  /** Used to match template delimiters. */
  var reInterpolate = /<%=([\s\S]+?)%>/g;
  
  module.exports = reInterpolate;
  

});

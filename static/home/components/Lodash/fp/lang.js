define('home:components/Lodash/fp/lang.js', function(require, exports, module) {

  var convert = require('home:components/Lodash/fp/convert.js');
  module.exports = convert(require('home:components/Lodash/lang.js'));
  

});

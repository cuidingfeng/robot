define('home:components/Lodash/fp/assign.js', function(require, exports, module) {

  var convert = require('home:components/Lodash/fp/convert.js');
  module.exports = convert('assign', require('home:components/Lodash/assign.js'));
  

});

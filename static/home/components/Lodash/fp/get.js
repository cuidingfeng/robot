define('home:components/Lodash/fp/get.js', function(require, exports, module) {

  var convert = require('home:components/Lodash/fp/convert.js');
  module.exports = convert('get', require('home:components/Lodash/get.js'));
  

});

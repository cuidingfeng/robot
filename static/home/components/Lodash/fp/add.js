define('home:components/Lodash/fp/add.js', function(require, exports, module) {

  var convert = require('home:components/Lodash/fp/convert.js');
  module.exports = convert('add', require('home:components/Lodash/add.js'));
  

});

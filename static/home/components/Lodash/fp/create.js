define('home:components/Lodash/fp/create.js', function(require, exports, module) {

  var convert = require('home:components/Lodash/fp/convert.js');
  module.exports = convert('create', require('home:components/Lodash/create.js'));
  

});

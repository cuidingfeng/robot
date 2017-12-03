define('home:components/Lodash/fp/update.js', function(require, exports, module) {

  var convert = require('home:components/Lodash/fp/convert.js');
  module.exports = convert('update', require('home:components/Lodash/update.js'));
  

});

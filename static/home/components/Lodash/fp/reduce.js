define('home:components/Lodash/fp/reduce.js', function(require, exports, module) {

  var convert = require('home:components/Lodash/fp/convert.js');
  module.exports = convert('reduce', require('home:components/Lodash/reduce.js'));
  

});

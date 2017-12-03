define('home:components/Lodash/fp/number.js', function(require, exports, module) {

  var convert = require('home:components/Lodash/fp/convert.js');
  module.exports = convert(require('home:components/Lodash/number.js'));
  

});

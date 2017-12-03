define('home:components/Lodash/math.js', function(require, exports, module) {

  module.exports = {
    'add': require('home:components/Lodash/add.js'),
    'ceil': require('home:components/Lodash/ceil.js'),
    'floor': require('home:components/Lodash/floor.js'),
    'max': require('home:components/Lodash/max.js'),
    'maxBy': require('home:components/Lodash/maxBy.js'),
    'mean': require('home:components/Lodash/mean.js'),
    'min': require('./min'),
    'minBy': require('home:components/Lodash/minBy.js'),
    'round': require('home:components/Lodash/round.js'),
    'subtract': require('home:components/Lodash/subtract.js'),
    'sum': require('home:components/Lodash/sum.js'),
    'sumBy': require('home:components/Lodash/sumBy.js')
  };
  

});

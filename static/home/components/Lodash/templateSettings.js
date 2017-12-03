define('home:components/Lodash/templateSettings.js', function(require, exports, module) {

  var escape = require('home:components/Lodash/escape.js'),
      reEscape = require('home:components/Lodash/_reEscape.js'),
      reEvaluate = require('home:components/Lodash/_reEvaluate.js'),
      reInterpolate = require('home:components/Lodash/_reInterpolate.js');
  
  /**
   * By default, the template delimiters used by lodash are like those in
   * embedded Ruby (ERB). Change the following template settings to use
   * alternative delimiters.
   *
   * @static
   * @memberOf _
   * @type {Object}
   */
  var templateSettings = {
  
    /**
     * Used to detect `data` property values to be HTML-escaped.
     *
     * @memberOf _.templateSettings
     * @type {RegExp}
     */
    'escape': reEscape,
  
    /**
     * Used to detect code to be evaluated.
     *
     * @memberOf _.templateSettings
     * @type {RegExp}
     */
    'evaluate': reEvaluate,
  
    /**
     * Used to detect `data` property values to inject.
     *
     * @memberOf _.templateSettings
     * @type {RegExp}
     */
    'interpolate': reInterpolate,
  
    /**
     * Used to reference the data object in the template text.
     *
     * @memberOf _.templateSettings
     * @type {string}
     */
    'variable': '',
  
    /**
     * Used to import variables into the compiled template.
     *
     * @memberOf _.templateSettings
     * @type {Object}
     */
    'imports': {
  
      /**
       * A reference to the `lodash` function.
       *
       * @memberOf _.templateSettings.imports
       * @type {Function}
       */
      '_': { 'escape': escape }
    }
  };
  
  module.exports = templateSettings;
  

});

define('sensor:widget/http/http.js', function(require, exports, module) {

  const $ = require("home:components/jquery/jquery");
  $("#evchange").click(function(){
      $.get("/sensor/http/evchange", {
          status: "start"
      }, function(res){
          console.log(res);
      });
  });

});

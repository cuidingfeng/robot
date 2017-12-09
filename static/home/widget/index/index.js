define('home:widget/index/index.js', function(require, exports, module) {

  const $ = require("home:components/jquery/jquery.js");
  console.log($);
  $("#start").click(function(){
      $.get("/home/start", {
          status: "start"
      }, function(res){
          console.log(res);
      });
  });
  $("#pause").click(function(){
      $.get("/home/start", {
          status: "pause"
      }, function(res){
          console.log(res);
      });
  });
  $("#end").click(function(){
      $.get("/home/start", {
          status: "end"
      }, function(res){
          console.log(res);
      });
  });

});

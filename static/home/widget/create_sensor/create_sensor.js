define('home:widget/create_sensor/create_sensor.js', function(require, exports, module) {

  const $ = require("home:components/jquery/jquery.js");
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
  
  $("#create_sensor").click(function(){
      let title = $("#title").val(),
          uri = $("#uri").val(),
          stype = $("#stype").val(),
          post_data = {
              title: title,
              uri: uri,
              stype: stype
          };
  
      $.ajax("/home/sensor/save_sensor", {
          data: post_data,
          dataType: "json",
          type: "post"
      }).then(function(data){
          console.log(data);
          $("#sensorid").text(data.res.insertId);
          $("#secretkey").text(data.req.secretkey);
      });
  });

});

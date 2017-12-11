define('home:widget/view_sensor_case/add_sensor.js', function(require, exports, module) {

  const $ = require("home:components/jquery/jquery.js");
  let sensor_id, space_time_id, sensor_case_id;
  
  module.exports = function(_sensor_id, _space_time_id, _sensor_case_id){
      sensor_id = _sensor_id;
      space_time_id = _space_time_id;
      sensor_case_id = _sensor_case_id;
  }
  
  $("#create_btn").click(function(){
      if(sensor_case_id){
          saveAttr();
          return;
      }
      $.ajax("/home/space_time/save_sensor_case", {
          data: {
              sid: sensor_id,
              stid: space_time_id
          },
          dataType: "json",
          type: "post"
      }).then(function(data){
          console.log(data);
          if(data.res.error){
              alert(data.res.error);
          }else{
              sensor_case_id = data.res.insertId;
              saveAttr();
          }
      });
  });
  
  const saveAttr = function(){
      alert(sensor_case_id);
  };
  

});

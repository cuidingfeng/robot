define('home:widget/view_sensor_case/view_sensor_case.js', function(require, exports, module) {

  const $ = require("home:components/jquery/jquery.js");
  let sensor_id, space_time_id, sensor_case_id;
  
  module.exports = function(_sensor_id, _space_time_id, _sensor_case_id){
      sensor_id = _sensor_id;
      space_time_id = _space_time_id;
      sensor_case_id = _sensor_case_id;
  }
  
  $("#create_btn").click(function(){
      saveAttr();
  });
  
  const saveAttr = function(){
      let datas = [];
      $(".caseAttr").each(function(){
          let attrid = $(this).data("attrid"),
              value = $(this).val();
          datas.push({
              said: attrid,
              value: value
          });
      });
      $.ajax("/home/space_time/save_sensor_case_attr", {
          data: {
              datas: JSON.stringify(datas),
              sensor_case_id: sensor_case_id
          },
          dataType: "json",
          type: "post"
      }).then(function(data){
          if(data.res.error){
              alert(data.res.error);
          }else{
              location.reload();
          }
      });
  };
  

});

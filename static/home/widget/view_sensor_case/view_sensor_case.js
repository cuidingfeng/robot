define('home:widget/view_sensor_case/view_sensor_case.js', function(require, exports, module) {

  const $ = require("home:components/jquery/jquery.js");
  let sensor_id, space_time_id, sensor_case_id;
  
  module.exports = function(_sensor_id, _space_time_id, _sensor_case_id){
      sensor_id = _sensor_id;
      space_time_id = _space_time_id;
      sensor_case_id = _sensor_case_id;
  }
  
  $("#create_btn").click(function(){
      const from = $(this).data("from");
      saveAttr(from);
  });
  
  const saveAttr = function(from){
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
          if(from == "space_time_add"){
              location.replace("./view?id=" + space_time_id);
          }else{
              alert("修改成功");
          }
      });
  };
  

});

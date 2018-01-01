define('home:widget/view_robot_case/view_robot_case.js', function(require, exports, module) {

  const $ = require("home:components/jquery/jquery.js");
  let robot_id, space_time_id, robot_case_id;
  
  module.exports = function(_robot_id, _space_time_id, _robot_case_id){
      robot_id = _robot_id;
      space_time_id = _space_time_id;
      robot_case_id = _robot_case_id;
  }
  
  $("#create_btn").click(function(){
      const from = $(this).data("from");
      saveAttr(from);
  });
  
  const saveAttr = function(from){
      let datas = [];
      let alias = $("#alias").val();
      let case_info = $("#case_info").val();
      $(".caseAttr").each(function(){
          let attrid = $(this).data("attrid"),
              value = $(this).val();
          datas.push({
              raid: attrid,
              value: value
          });
      });
      $.ajax("/home/space_time/save_robot_case", {
          data: {
              datas: JSON.stringify(datas),
              robot_case_id,
              robot_id,
              alias,
              case_info
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

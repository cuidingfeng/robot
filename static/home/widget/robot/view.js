define('home:widget/robot/view.js', function(require, exports, module) {

  const $ = require("home:components/jquery/jquery.js");
  let robotId;
  
  module.exports = function(id){
      robotId = id;
  }
  
  $("#addAttr").click(function(){
      let title = $("#attr_title").val(),
          attr_name = $("#attr_name").val(),
          value = $("#attr_value").val(),
          info = $("#attr_info").val(),
          post_data = {
              robot_id: robotId,
              title: title,
              attr_name: attr_name,
              value: value,
              info: info
          };
  
      $.ajax("/home/robot/save_attr", {
          data: post_data,
          dataType: "json",
          type: "post"
      }).then(function(data){
          if(data.res.error){
              alert(data.res.error);
          }else{
              location.reload();
          }
      });
  });
  
  $("#addAction").click(function(){
      let title = $("#action_title").val(),
          action_name = $("#action_name").val(),
          value = $("#action_value").val(),
          info = $("#action_info").val(),
          post_data = {
              robot_id: robotId,
              title: title,
              action_name: action_name,
              value: value,
              info: info
          };
  
      $.ajax("/home/robot/save_action", {
          data: post_data,
          dataType: "json",
          type: "post"
      }).then(function(data){
          if(data.res.error){
              alert(data.res.error);
          }else{
              location.reload();
          }
      });
  });
  
  $("a[ajax=true]").click(function(){
      let url = $(this).attr("href"),
          $confirm = $(this).attr("confirm"),
          $text = $(this).text(),
          $fn = () => {
              $.get(url).then(function(data){
                  location.reload();
              });
          };
      if($confirm == "true"){
          confirm(`确定要执行操作【${$text}】吗？`) && $fn();
      }else{
          $fn();
      }
      return false;
  });
  
  
  

});

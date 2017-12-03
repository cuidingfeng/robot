define('home:widget/robot/create.js', function(require, exports, module) {

  const $ = require("home:components/jquery/jquery.js");
  
  $("#create_btn").click(function(){
      let title = $("#title").val(),
          robotId = $("#robotId").val(),
          stype = $("#stype").val(),
          info = $("#info").val(),
          uri = $("#uri").val(),
          post_data = {
              title: title,
              robotId: robotId,
              uri: uri,
              stype: stype,
              info: info
          };
  
      $.ajax("/home/robot/save_robot", {
          data: post_data,
          dataType: "json",
          type: "post"
      }).then(function(data){
          console.log(data);
          if(data.res.error){
              alert(data.res.error);
          }else{
              $("#secretkey").text(data.req.secretkey);
              $("#meBtns").append(`<a href="./view?id=${data.res.insertId}" class="formBtn">查看</a>`);
          }
      });
  });
  
  

});

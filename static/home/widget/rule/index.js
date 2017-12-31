define('home:widget/rule/index.js', function(require, exports, module) {

  const $ = require("home:components/jquery/jquery.js");
  let space_time_id;
  const oDom = $("#eventOther");
  
  module.exports = (_space_time_id) => {
      space_time_id = _space_time_id;
  }
  
  /**
   * 选择从哪里接收事件后
   */
  $("#eventType").change(function(){
      let etype = $(this).val();
      oDom.html("");
      if(etype == "sensor"){
          sensorSelect().then((html) => {
              oDom.append(html);
              oDom.find("#sensors").trigger("change");
          });
      }else if(etype == "status"){
          statusSelect().then((html) => {
              oDom.append(html);
          });
      }
  });
  
  /**
   * 选择某个传感器后，获取它的事件列表
   */
  oDom.on("change", "#sensors", function(){
      let sensor_id = $(this).val();
      sensorEventSelect(sensor_id).then((html) => {
          $("#sensor_events").remove();
          oDom.append(html);
      });
  });
  
  
  /**
   * 获取传感器列表
   */
  const sensorSelect = () => {
      let optionsHtml = "";
      return $.ajax("/home/space_time/getdata", {
          data: {
              action: "sensorList",
              space_time_id
          },
          dataType: "json",
          type: "post"
      }).then(function(data){
          if(data.error){
              alert(data.error);
          }else{
              $.each(data.res, (i, sensor) => {
                  console.log(sensor);
                  optionsHtml += `<option value="${sensor.id}" scid="${sensor.scid}">${sensor.title}【${sensor.title2}】</option>`
              })
          }
          return `<select id="sensors">${optionsHtml}</select>`
      });
  };
  
  /**
   * 获取传感器的事件列表
   * @param {*传感器id} sensor_id 
   */
  const sensorEventSelect = (sensor_id) => {
      let optionsHtml = "";
      return $.ajax("/home/space_time/getdata", {
          data: {
              action: "sensorEventList",
              sensor_id
          },
          dataType: "json",
          type: "post"
      }).then(function(data){
          if(data.error){
              alert(data.error);
          }else{
              $.each(data.res, (i, event) => {
                  optionsHtml += `<option value="${event.id}">${event.title}【${event.event_name}】</option>`
              })
          }
          return `<select id="sensor_events">${optionsHtml}</select>`
      });
  };
  
  /**
   * 获取状态机列表
   */
  const statusSelect = () => {
      let optionsHtml = "";
      return $.ajax("/home/space_time/getdata", {
          data: {
              action: "statusList",
              space_time_id
          },
          dataType: "json",
          type: "post"
      }).then(function(data){
          if(data.error){
              alert(data.error);
          }else{
              $.each(data.res, (i, status) => {
                  optionsHtml += `<option value="${status.id}">${status.title}【${status.name}】</option>`
              })
          }
          return `<select id="statuss">${optionsHtml}</select>`
      });
  };
  
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
  
  
  $("#create_btn").click(function(){
      let eventType = $("#eventType").val(),
          code = $("#code").val(),
          info = $("#info").val(),
          post_data = {
              space_time_id,
              code,
              info,
              state: 1
          };
      if(eventType == "sensor"){
          post_data.sensor_case_id = $("#sensors>option:selected").attr("scid");
          post_data.event_id = $("#sensor_events").val();
      }else if(eventType == "status"){
          post_data.status_id = $("#statuss").val();
      }else if(eventType == "robot"){
          post_data.robot_case_id = $("#robots>option:selected").attr("rcid");
          post_data.action_id = $("#robot_actions").val();
      }else{
          alert("请选择正确的事件类型！");
          return;
      }
  
      $.ajax("/home/rule/save_rule", {
          data: post_data,
          dataType: "json",
          type: "post"
      }).then(function(data){
          console.log(data);
          if(data.res.error){
              alert(data.res.error);
          }else{
              location.href = `?space_time_id=${space_time_id}&rule_id=${data.res.insertId}`;
          }
      });
  });
  

});

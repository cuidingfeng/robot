const $ = require("jquery");
let sensorId;

module.exports = function(id){
    sensorId = id;
}

$("#addAttr").click(function(){
    let title = $("#attr_title").val(),
        attr_name = $("#attr_name").val(),
        value = $("#attr_value").val(),
        info = $("#attr_info").val(),
        post_data = {
            sensor_id: sensorId,
            title: title,
            attr_name: attr_name,
            value: value,
            info: info
        };

    $.ajax("/home/sensor/save_attr", {
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

$("#addEvent").click(function(){
    let title = $("#event_title").val(),
        event_name = $("#event_name").val(),
        value = $("#event_value").val(),
        info = $("#event_info").val(),
        post_data = {
            sensor_id: sensorId,
            title: title,
            event_name: event_name,
            value: value,
            info: info
        };

    $.ajax("/home/sensor/save_event", {
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
    var url = $(this).attr("href");
    $.get(url).then(function(data){
        location.reload();
    });
});


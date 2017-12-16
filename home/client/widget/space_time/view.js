const $ = require("jquery");
let space_time_id;

module.exports = function(id){
    space_time_id = id;
}

$("#addAttr").click(function(){
    let title = $("#attr_title").val(),
        attr_name = $("#attr_name").val(),
        value = $("#attr_value").val(),
        info = $("#attr_info").val(),
        post_data = {
            robot_id: space_time_id,
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

$("#addEvent").click(function(){
    let title = $("#event_title").val(),
        event_name = $("#event_name").val(),
        value = $("#event_value").val(),
        info = $("#event_info").val(),
        post_data = {
            robot_id: space_time_id,
            title: title,
            event_name: event_name,
            value: value,
            info: info
        };

    $.ajax("/home/robot/save_event", {
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


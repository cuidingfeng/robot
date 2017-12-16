const $ = require("jquery");
let space_time_id, status_id;

module.exports = function(_space_time_id, _status_id = ""){
    [space_time_id, status_id] = [_space_time_id, _status_id];
}

$("#create_btn").click(function(){
    const from = $(this).data("from");
    saveStatus(from);
});

const saveStatus = function(from){
    let title = $("#title").val(),
        name = $("#name").val(),
        value = $("#value").val(),
        info = $("#info").val(),
        post_data = {
            stid: space_time_id,
            title,
            name,
            value,
            info
        };
    let url = "/home/space_time/save_status";
    if(status_id){
        url += "?status_id=" + status_id;
    }

    $.ajax(url, {
        data: post_data,
        dataType: "json",
        type: "post"
    }).then(function(data){
        if(status_id){
            location.reload();
        }else{
            location.href += "&status_id=" + data.res.insertId
        }
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

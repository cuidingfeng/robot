const $ = require("jquery");
let sensor_id, space_time_id;

module.exports = function(_sensor_id, _space_time_id){
    sensor_id = _sensor_id;
    space_time_id = _space_time_id;
}

$("#create_btn").click(function(){
    let title = $("#title").val(),
        info = $("#info").val(),
        post_data = {
            title: title,
            info: info
        };

    $.ajax("/home/space_time/save_space_time", {
        data: post_data,
        dataType: "json",
        type: "post"
    }).then(function(data){
        console.log(data);
        if(data.res.error){
            alert(data.res.error);
        }else{
            $("#meBtns").append(`<a href="./view?id=${data.res.insertId}" class="formBtn">查看</a>`);
        }
    });
});

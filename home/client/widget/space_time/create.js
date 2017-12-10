const $ = require("jquery");

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


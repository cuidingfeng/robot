const $ = require("jquery");
$("#start").click(function(){
    $.get("/home/start", {
        status: "start"
    }, function(res){
        console.log(res);
    });
});
$("#pause").click(function(){
    $.get("/home/start", {
        status: "pause"
    }, function(res){
        console.log(res);
    });
});
$("#end").click(function(){
    $.get("/home/start", {
        status: "end"
    }, function(res){
        console.log(res);
    });
});

$("#create_sensor").click(function(){
    let title = $("#title").val(),
        uri = $("#uri").val(),
        stype = $("#stype").val(),
        info = $("#info").val(),
        post_data = {
            title: title,
            uri: uri,
            stype: stype,
            info: info
        };

    $.ajax("/home/sensor/save_sensor", {
        data: post_data,
        dataType: "json",
        type: "post"
    }).then(function(data){
        console.log(data);
        if(data.res.error){
            alert(data.res.error);
        }else{
            $("#sensorid").text(data.res.insertId);
            $("#secretkey").text(data.req.secretkey);
            $("#meBtns").append(`<a href="./view?id=${data.res.insertId}" class="formBtn">查看</a>`);
        }
    });
});


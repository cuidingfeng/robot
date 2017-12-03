const $ = require("jquery");
console.log($);
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
const $ = require("home:components/jquery/jquery.js");
$("#evchange").click(function(){
    $.get("/sensor/http/evchange", {
        status: "start"
    }, function(res){
        console.log(res);
    });
});
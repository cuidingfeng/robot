const listen = require("../../home/model/listen");

module.exports.send = function(data){
    data.evType = "sensor";
    listen.local(data); 

};
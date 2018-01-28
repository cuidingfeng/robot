/*监听事件，接收各种协议的事件，转换成标准的格式，发送给处理中心*/

let manage = require("./manage");

module.exports = function(req, res){
    res.send("ok");
};

module.exports.local = function(req){
    //console.log("this is local listen: " + JSON.stringify(req));
    manage.on({
        "stype": "local",
        "evType": req.evType,
        "sensor_case_id": req.sensor_case_id,
        "eventName": req.eventName,
        "data": req.data,
        "req": req
    });
};

module.exports.http = function(body){
    manage.on({
        "protocol": "http",
        "evType": "sensor",
        "sensor_id": body.sensor_id,
        "sensor_case_id": body.sensor_case_id,
        "eventName": body.eventName,
        "data": JSON.parse(body.data),
        "body": body
    });
};
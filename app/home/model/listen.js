/*监听事件，接收各种协议的事件，转换成标准的格式，发送给处理中心*/

let manage = require("./manage");

module.exports = function(req, res){
    res.send("ok");
};

module.exports.local = function(req){
    //console.log("this is local listen: " + JSON.stringify(req));
    manage.on({
        "evType": "local",
        "namespace": req.sensorName,
        "evId": req.evName,
        "data": req.data,
        "req": req
    });
};
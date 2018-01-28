let listen = require("../../home/model/listen");
let 
    startNum = 1, //初始值
    space = 1000, //时间间隔
    json = {
        "sensorName": "time", //传感器标识
        "evName": "miao", //事件标识
        "data": {
            "total": startNum
        }
    };
    
let inter = undefined;
module.exports = function(req, res){
    
    listen.local(json);
    res.send(JSON.stringify(json));
};

/**
 * 开始
 */
module.exports.start = function(req, res){
    inter = setInterval(()=>{
        listen.local(json);
        json.data.total++;
    }, space);
};

/**
 * 暂停
 */
module.exports.pause = function(req, res){
    clearInterval(inter);
};

/**
 * 停止
 */
module.exports.end = function(req, res){
    clearInterval(inter);
    json.data.total = startNum;
};
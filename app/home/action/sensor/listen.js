let listen = require("../../model/listen");

module.exports.post = function(req, res){
    console.log("接收到事件：", req.body);
    listen.http(req.body);
    res.send("事件接收完成：this is httpDemo");
};
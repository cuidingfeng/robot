const request = require('request');

module.exports = function(req, res){
    console.log("this is robot body: ", req.body);
    body = req.body;
    res.send(JSON.stringify({
        //status: "success"
        //status: "error"
        status: "await"
    }));

    setTimeout(function(){
        request.post("http://127.0.0.1:8001/home/robot/action_callback", (error, response, body)=>{
            //console.warn("机器人动作发送完成，执行状态：" + body.status);
        }).
        form({
            secretKey:'b89f8bdb3c42bbfb83ac181c767bdcdf',
            robot_id: 3,
            requestId: body.requestId, //本次请求的唯一ID标识
            status: "success"
        });
    }, 3000);
    
};
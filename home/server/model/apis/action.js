const request = require('request'),
    util = require("../../lib/util");

const http = ({robotUrl, action, robot_case_id, data}) => {
    const requestId = util.createSecretKey();
    request.post(robotUrl, (error, response, body)=>{
        if(typeof body === 'string'){
            body = JSON.parse(body);
        }
        console.warn("机器人动作发送完成，执行状态：" + body.status);
        if(body.status != "await"){
            runEnd({
                requestId,
                status: body.status
            });
        }
    }).
    form({
        secretKey:'b89f8bdb3c42bbfb83ac181c767bdcdf',
        action,
        robot_case_id,
        requestId: requestId, //本次请求的唯一ID标识
        data: JSON.stringify(data)
    });
};

const run = (conf) => {
    switch(conf.stype){

        case "http":
            http(conf);
            break;

    }
}

const callback = (body) => {
    runEnd({
        requestId: body.requestId,
        status: body.status
    });
}

const runEnd = ({requestId, status}) => {
    const labels = {
        "success": "成功",
        "error": "失败"
    }
    console.info(`机器人动作执行“${requestId}”${labels[status]}`);
}

module.exports = {
    http,
    run,
    callback
}


const md5 = require("md5");

module.exports = {
    createSecretKey: function(){
        const random = Math.random(),
              time   = Date.now();
        return md5(time + random);
    },
    space_time_status: function(status){
        return {
            0: "未配置",
            1: "未启动",
            2: "运行中",
            3: "配置错误"
        }[status]
    }
};
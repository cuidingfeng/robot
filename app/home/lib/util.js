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
    },

    /**
     * @argument status 状态值
     * @argument next 是否取反值
     */
    case_status: function(status, next = false){
        status = +status;
        if(next){
            status = +!status;
        }
        return {
            0: "禁用",
            1: "启用"
        }[status]
    }
};
const robot = require('./robot');

module.exports = {
    getFun: ($code) => {
        return new Function("$this", "$data", "$status", "$robot", $code);
    },
    runFun: async ({FN, data, status, type, space_time_id}) => {
        const $robot = await robot.getRobotCaseList(space_time_id);
        if(type == "status"){
            FN(data, data, status, $robot);
        }else{
          FN(null, data, status, $robot);
        }
    }
}
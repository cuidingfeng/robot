
module.exports = {
    getFun: ($code) => {
        return new Function("$this", "$data", "$status", $code);
    },
    runFun: ({FN, data, status, type}) => {
        if(type == "status"){
            FN(data, data, status);
        }else{
          FN(null, data, status);
        }
    }
}
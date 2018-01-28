let datetime = require("../../model/datetime");

module.exports = function({sensor, sensor_case, attr}){
    datetime.SaveCase({
        "sensor_case_id": sensor_case.id,
        "formatStr": attr.formatStr
    });
};
const _ = require("underscore");
let datetime = require("../../model/datetime");

module.exports = function ({ sensor, sensor_case, attr, status, action }) {
    switch(action){
        case "edit":
            datetime.SaveCase({
                "sensor_case_id": sensor_case.id,
                "formatStr": attr.formatStr
            });
            break;

        case "status":
            datetime.CaseStatus({
                "sensor_case_id": sensor_case.id,
                "status": status
            });
            break;

        case "delete":
            datetime.DeleteCase({
                "sensor_case_id": sensor_case.id
            });
            break;
    }
    
};
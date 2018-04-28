const _ = require("underscore");
let datetime = require("../../model/datetime");

module.exports = function ({ sensor, sensor_case, attr, status }) {
    if (attr && attr.formatStr) {
        datetime.SaveCase({
            "sensor_case_id": sensor_case.id,
            "formatStr": attr.formatStr
        });
    }
    if (!_.isUndefined(status)) {
        datetime.CaseStatus({
            "sensor_case_id": sensor_case.id,
            "status": status
        });
    }
};
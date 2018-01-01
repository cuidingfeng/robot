let rule = require("../../model/rule");

module.exports = function (req, res) {
    const { action, space_time_id, sensor_id, sensor_case_id } = req.body;
    let $data = {};
    switch (action) {
        case "sensorList":
            rule.sensorList(space_time_id).then((rs) => {
                $data.res = rs;
                res.send(JSON.stringify($data));
            });
            break;
        case "sensorEventList":
            rule.sensorEventList(sensor_id, sensor_case_id).then((rs) => {
                $data.res = rs;
                res.send(JSON.stringify($data));
            });
            break;
        case "statusList":
            rule.statusList(space_time_id).then((rs) => {
                $data.res = rs;
                res.send(JSON.stringify($data));
            });
            break;
        default:
            $data.error = "无效的action";
            res.send(JSON.stringify($data));
    }

};
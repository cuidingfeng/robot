let sensor = require("../../model/sensor");
let execute = require("../../model/execute");


module.exports.post = function (req, res) {
    Promise.all([
        sensor.save_sensor_case_attr(req.body),
        sensor.edit_sensor_case({
            alias: req.body.alias,
            case_info: req.body.case_info
        }, req.body.sensor_case_id),
        sensor.view(req.body.sensor_id),
        sensor.sensor_case(req.body.sensor_case_id)
    ]).then(([attr, edit, { sensor }, sensor_case]) => {
        //通知传感器服务商
        execute.initSensor({
            sensor: sensor[0],
            sensor_case: sensor_case,
            attr,
            action: "edit"
        });

        res.send(JSON.stringify({
            attr,
            edit
        }));
    });
};
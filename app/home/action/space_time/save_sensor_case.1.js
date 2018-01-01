let sensor = require("../../model/sensor");
let request = require("request");

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
        request.post(sensor[0].init_url, (error, response, body) => {
            console.warn(body);

            res.send(JSON.stringify({
                attr,
                edit
            }));
        }).
            form({
                secretKey: 'b89f8bdb3c42bbfb83ac181c767bd65d',
                case_id: sensor_case.id
            });
    });
};
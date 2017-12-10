let space_time = require("../../model/space_time"),
    util = require('../../lib/util'),
    sensor = require("../../model/sensor");

module.exports.get = function (req, res) {
    const sensor_id = req.query.sensor_id,
        space_time_id = req.query.space_time_id;

    if (!sensor_id) {
        res.redirect('/home/sensor/list?type=select&callback=' + encodeURIComponent(req.originalUrl));
    }

    Promise.all([sensor.view(sensor_id), space_time.view(space_time_id)]).
        then(function ([$sensor, $space_time]) {
            res.render('home/page/space_time/add_sensor.tpl', {
                sensor_id: sensor_id,
                space_time_id: space_time_id,
                sensor: $sensor.sensor[0],
                sensor_attr: $sensor.attr,
                space_time: $space_time.space_time[0]
            });
        });
};
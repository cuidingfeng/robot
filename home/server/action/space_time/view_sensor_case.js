let space_time = require("../../model/space_time"),
    util = require('../../lib/util'),
    sensor = require("../../model/sensor");

module.exports.get = function (req, res) {
    space_time.db_sensor_case(req.query.scid).
        then(({sid: sensor_id, stid: space_time_id, id: sensor_case_id}) => {
            Promise.all([sensor.view(sensor_id), space_time.view(space_time_id)]).
                then(function ([$sensor, $space_time]) {
                    res.render('home/page/space_time/view_sensor_case.tpl', {
                        sensor_id: sensor_id,
                        space_time_id: space_time_id,
                        sensor_case_id: sensor_case_id,
                        sensor: $sensor.sensor[0],
                        sensor_attr: $sensor.attr,
                        space_time: $space_time.space_time[0]
                    });
                });
        });
};
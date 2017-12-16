let space_time = require("../../model/space_time"),
    util = require('../../lib/util');

module.exports.get = function(req, res){
    space_time.view(req.query.id).then(({space_time, sensor_case, sensor_case_attr, robot_case}) => {
        res.render('home/page/space_time/view.tpl', {
            space_time: space_time[0],
            sensor_case,
            sensor_case_attr,
            robot_case,
            util
        });
    });
};
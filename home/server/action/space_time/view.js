let space_time = require("../../model/space_time"),
    util = require('../../lib/util');

module.exports.get = function(req, res){
    space_time.view(req.query.id).then(({space_time, sensor_case, sensor_case_attr}) => {
        res.render('home/page/space_time/view.tpl', {
            space_time: space_time[0],
            sensor_case: sensor_case,
            sensor_case_attr: sensor_case_attr,
            util: util
        });
    });
};
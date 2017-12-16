let space_time = require("../../model/space_time"),
    util = require('../../lib/util');
    
/**
 * 给时空添加传感器，query传进来时空id和传感器id，不存在就去选择，添加完成创建传感器实例，进入实例详情页
 * @param {*} req 
 * @param {*} res 
 */
module.exports.get = function (req, res) {
    const sensor_id = req.query.sensor_id,
        space_time_id = req.query.space_time_id;

    if (!sensor_id) {
        res.redirect('/home/sensor/list?type=select&callback=' + encodeURIComponent(req.originalUrl));
        return;
    }

    if (!space_time_id) {
        res.redirect('/home/space_time/list?type=select&callback=' + encodeURIComponent(req.originalUrl));
        return;
    }

    space_time.save_sensor_case({
        sid: sensor_id,
        stid: space_time_id
    }).then((data) => {
        res.redirect('/home/space_time/view_sensor_case?from=space_time_add&scid=' + data.res.insertId );
    });
};
let space_time = require("../../model/space_time"),
    util = require('../../lib/util');
    
/**
 * 给时空添加机器人，query传进来时空id和机器人id，不存在就去选择，添加完成创建传感器实例，进入实例详情页
 * @param {*} req 
 * @param {*} res 
 */
module.exports.get = function (req, res) {
    const robot_id = req.query.robot_id,
        space_time_id = req.query.space_time_id;

    if (!robot_id) {
        res.redirect('/home/robot/list?type=select&callback=' + encodeURIComponent(req.originalUrl));
        return;
    }

    if (!space_time_id) {
        res.redirect('/home/space_time/list?type=select&callback=' + encodeURIComponent(req.originalUrl));
        return;
    }

    space_time.save_robot_case({
        rid: robot_id,
        stid: space_time_id
    }).then((data) => {
        res.redirect('/home/space_time/view_robot_case?from=space_time_add&rcid=' + data.res.insertId );
    });
};
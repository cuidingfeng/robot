let space_time = require("../../model/space_time"),
    util = require('../../lib/util'),
    robot = require("../../model/robot");

module.exports.get = function (req, res) {
    space_time.db_robot_case(req.query.rcid).
        then(({rid: robot_id, stid: space_time_id, id: robot_case_id}) => {
            Promise.all([
                robot.view(robot_id), 
                space_time.view(space_time_id),
                robot.robot_case(robot_case_id)
            ]).
                then(function ([$robot, $space_time, $robot_case]) {
                    let attrs = $robot.attr, robot_case_attr = $space_time.robot_case_attr;
                    attrs.forEach(attr => {
                        const case_attr = robot_case_attr.find( (rca) => rca.rcid == robot_case_id && rca.raid == attr.id );
                        if(case_attr){
                            attr.case_value = case_attr.case_value;
                        }
                    });
                    res.render('home/page/space_time/view_robot_case.tpl', {
                        robot_id: robot_id,
                        space_time_id: space_time_id,
                        robot_case_id: robot_case_id,
                        robot: $robot.robot[0],
                        robot_case: $robot_case,
                        robot_attr: attrs,
                        space_time: $space_time.space_time[0],
                        from: req.query.from
                    });
                });
        });


};
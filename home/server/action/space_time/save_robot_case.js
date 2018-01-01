let robot = require("../../model/robot");
let request = require("request");

module.exports.post = function (req, res) {
    Promise.all([
        robot.save_robot_case_attr(req.body),
        robot.edit_robot_case({
            alias: req.body.alias,
            case_info: req.body.case_info
        }, req.body.robot_case_id),
        robot.view(req.body.robot_id),
        robot.robot_case(req.body.robot_case_id),
        robot.getAttrs(req.body.robot_case_id)
    ]).then(([saveAttr, edit, { robot }, robot_case, attrs]) => {
        let data = {};
        attrs.map( ({keyName, value, id}) => data[keyName] = saveAttr[id] || value );
        request.post(robot[0].uri, (error, response, body) => {
            console.log("机器人动作执行完成: init");
        }).
            form({
                "action": "init",
                secretKey: 'b89f8bdb3c42bbfb83ac181c767bd65d',
                case_id: robot_case.id,
                data: JSON.stringify(data)
            });
    });
};
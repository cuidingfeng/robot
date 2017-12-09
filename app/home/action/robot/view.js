let robot = require("../../model/robot");

module.exports.get = function(req, res){
    robot.view(req.query.id).then(({robot, attr, event}) => {
        res.render('home/page/robot/view.tpl', {
            robot: robot[0],
            attrs: attr,
            events: event
        });
    });
};
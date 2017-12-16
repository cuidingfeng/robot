let robot = require("../../model/robot");

module.exports.get = function(req, res){
    robot.list().then((rows) => {
        res.render('home/page/robot/list.tpl', {
            rows: rows,
            req: req
        });
    });
};
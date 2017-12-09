let robot = require("../../model/robot");

module.exports.get = function(req, res){
    robot.delEvent(req.query.id).then((status) => {
        res.send("ok");
    });
};
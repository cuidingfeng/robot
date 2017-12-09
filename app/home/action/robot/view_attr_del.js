let robot = require("../../model/robot");

module.exports.get = function(req, res){
    robot.delAttr(req.query.id).then((status) => {
        res.send("ok");
    });
};
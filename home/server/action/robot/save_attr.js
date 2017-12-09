let robot = require("../../model/robot");

module.exports.post = function(req, res){
    robot.saveAttr(req.body, "create").then((data) => {
        res.send(JSON.stringify(data));
    });
};
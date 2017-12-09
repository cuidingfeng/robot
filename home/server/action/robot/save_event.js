let robot = require("../../model/robot");

module.exports.post = function(req, res){
    robot.saveEvent(req.body, "create").then((data) => {
        res.send(JSON.stringify(data));
    });
};
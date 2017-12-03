let sensor = require("../../model/sensor");

module.exports.post = function(req, res){
    sensor.saveAttr(req.body, "create").then((data) => {
        res.send(JSON.stringify(data));
    });
};
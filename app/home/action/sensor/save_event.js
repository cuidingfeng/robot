let sensor = require("../../model/sensor");

module.exports.post = function(req, res){
    sensor.saveEvent(req.body, "create").then((data) => {
        res.send(JSON.stringify(data));
    });
};
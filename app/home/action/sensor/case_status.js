let sensor = require("../../model/sensor");

module.exports.post = function(req, res){
    sensor.case_status(req.body).then((data) => {
        res.send(JSON.stringify({
            "code": 200
        }));
    });
};
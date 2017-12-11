let space_time = require("../../model/space_time");

module.exports.post = function(req, res){
    space_time.save_sensor_case_attr(req.body).then((data) => {
        res.send(JSON.stringify(data));
    });
};
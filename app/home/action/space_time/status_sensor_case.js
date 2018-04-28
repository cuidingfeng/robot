let space_time = require("../../model/space_time");

module.exports.get = function (req, res) {
    space_time.status_sensor_case(req.query.scid, req.query.status).then((data) => {
        res.send(JSON.stringify(data));
    });
};
let sensor = require("../../model/sensor");

module.exports.get = function(req, res){
    sensor.delAttr(req.query.id).then((status) => {
        res.send("ok");
    });
};
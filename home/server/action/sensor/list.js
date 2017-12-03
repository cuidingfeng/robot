let sensor = require("../../model/sensor");

module.exports.get = function(req, res){
    sensor.list().then((rows) => {
        res.render('home/page/sensor/list.tpl', {
            rows: rows
        });
    });
};
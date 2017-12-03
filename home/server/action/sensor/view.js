let sensor = require("../../model/sensor");

module.exports.get = function(req, res){
    sensor.view(req.query.id).then(({sensor, attr, event}) => {
        res.render('home/page/sensor/view.tpl', {
            sensor: sensor[0],
            attrs: attr,
            events: event
        });
    });
};
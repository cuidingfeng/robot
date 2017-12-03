let time = require("../../sensor/action/time");

module.exports = function(req, res){
    switch(req.query.status){
        case "start":
            time.start();
            break;
        case "pause":
            time.pause();
            break;
        case "end":
            time.end();
            break;
    }
    res.send("ok");
};
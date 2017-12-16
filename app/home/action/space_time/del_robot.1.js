let space_time = require("../../model/space_time");

module.exports.get = function(req, res){
    space_time.del_robot(req.query.rcid).then((data) => {
        res.send(JSON.stringify(data));
    });
};
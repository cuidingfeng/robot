let space_time = require("../../model/space_time");

module.exports.get = function(req, res){
    space_time.del_status(req.query.status_id).then((data) => {
        res.send(JSON.stringify(data));
    });
};
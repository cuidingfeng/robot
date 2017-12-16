let space_time = require("../../model/space_time");

module.exports.post = function(req, res){
    space_time.saveStatus(req.body, req.query.status_id).then((data) => {
        res.send(JSON.stringify(data));
    });
};
let space_time = require("../../model/space_time");

module.exports.post = function(req, res){
    space_time.save(req.body, "create").then((data) => {
        res.send(JSON.stringify(data));
    });
};
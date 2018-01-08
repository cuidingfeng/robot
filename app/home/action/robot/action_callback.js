const action = require("../../model/apis/action");

module.exports = function(req, res){
    body = req.body;
    action.callback(body);
    res.send(JSON.stringify({
        status: "success"
    }));
};
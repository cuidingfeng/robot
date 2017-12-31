let rule = require("../../model/rule");

module.exports.post = function(req, res){
    rule.save_rule(req.body, "create").then((data) => {
        res.send(JSON.stringify(data));
    });
};
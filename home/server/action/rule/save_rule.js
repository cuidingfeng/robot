let rule = require("../../model/rule");

module.exports.post = function(req, res){
    rule.save_rule(req.body).then((data) => {
        res.send(JSON.stringify(data));
    });
};
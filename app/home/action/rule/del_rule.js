let rule = require("../../model/rule");

module.exports = function(req, res){
    rule.del_rule(req.query.id).then((data) => {
        res.send(JSON.stringify(data));
    });
};
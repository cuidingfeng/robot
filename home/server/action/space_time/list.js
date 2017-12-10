let space_time = require("../../model/space_time"),
    util = require('../../lib/util');

module.exports.get = function(req, res){
    space_time.list().then((rows) => {
        res.render('home/page/space_time/list.tpl', {
            rows: rows,
            util: util
        });
    });
};
let space_time = require("../../model/space_time"),
    rule = require("../../model/rule"),
    util = require('../../lib/util');
    
/**
 * 中央处理器规则
 * @param {*} req 
 * @param {*} res 
 */
module.exports = function (req, res) {
    const space_time_id = req.query.space_time_id;
    Promise.all([
        space_time.view(space_time_id)
    ]).then(([{space_time}]) => {
        res.render('home/page/rule/index.tpl', {
            space_time: space_time[0],
            util
        });
    });
};
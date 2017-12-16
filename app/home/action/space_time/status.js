let space_time = require("../../model/space_time"),
    util = require('../../lib/util');
    
/**
 * 给时空添加状态机，query传进来时空id
 * @param {*} req 
 * @param {*} res 
 */
module.exports.get = function (req, res) {
    const space_time_id = req.query.space_time_id,
    status_id = req.query.status_id;
    Promise.all([
        space_time.view(space_time_id),
        status_id? space_time.viewStatus(status_id): [],
        space_time.statusList(space_time_id)
    ]).then(([{space_time}, [status], statusList]) => {
        if(status_id && !status){
            res.redirect(`/home/space_time/status?space_time_id=${space_time_id}`);
        }
        res.render('home/page/space_time/view_status.tpl', {
            space_time: space_time[0],
            status,
            statusList,
            util
        });
    });
};

module.exports = function(req, res){
    console.info(`init: RobotCaseId is ${req.body.case_id}`);
    res.send("ok");
};
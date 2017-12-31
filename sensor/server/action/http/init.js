
module.exports = function(req, res){
    console.info(`init: caseId is ${req.body.case_id}`);
    res.send("ok");
};
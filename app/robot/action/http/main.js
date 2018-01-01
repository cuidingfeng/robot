
module.exports = function(req, res){
    console.log("this is robot body: ",req.body);
    res.send("ok");
};
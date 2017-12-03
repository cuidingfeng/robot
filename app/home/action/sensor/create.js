
module.exports = function(req, res){
    yog.ralP('DEMO_SERVICE').then(function(data){
        console.log("ok", data);
    }).catch(function(err){
        console.log("error", err);
    });
    res.render('home/page/sensor/create.tpl');
};
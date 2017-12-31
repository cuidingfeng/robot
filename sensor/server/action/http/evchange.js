const request = require('request'); 
let num = 0;
module.exports = function(req, res){
    num++;
    request.post('http://127.0.0.1:8001/home/sensor/listen', (error, response, body)=>{
        console.warn(body);
        res.send(body);
    }).
    form({
        secretKey:'b89f8bdb3c42bbfb83ac181c767bd65d',
        eventName: "change",
        sensor_id: 35,
        sensor_case_id: 8,
        data: JSON.stringify({
            num
        })
    });
    
    
};
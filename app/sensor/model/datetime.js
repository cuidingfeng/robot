const db = require('./db').connection,
    exxcute = require("./exxcute"),
    schedule = require("node-schedule");

module.exports.SaveCase = function (json) {
    return db.then((conn) => {
        return conn.query(
            'select * from datetime where sensor_case_id=?',
            json.sensor_case_id
        ).then(([rows, fields]) => {
            if (rows.length > 0) {
                //如果已经存在就修改，否则就添加。
                return conn.query(
                    'UPDATE datetime SET formatStr = ? WHERE sensor_case_id=?',
                    [json.formatStr, json.sensor_case_id]
                )
            } else {
                return conn.query(
                    'insert into datetime set ?',
                    json
                )
            }
        }).then(([rows, fields]) => {
            onEvent(json.sensor_case_id, json.formatStr);
        });
    });
};

const getAllrules = () => {
    return db.then((conn) => {
        return conn.query(
            'select * from datetime'
        )
    });
};

module.exports.onLoad = () => {
    getAllrules().then(([rules]) => {
        rules.map((rule) => {
            onEvent(rule.sensor_case_id, rule.formatStr);
        });
    });
};

const onEvent = function(scid, formatStr){
    
    if (schedule.scheduledJobs[scid+""]) {
        var result = schedule.cancelJob(scid+"");
    }
    
    var mysche = schedule.scheduleJob(scid+"", formatStr, function(){  
        exxcute.send({
            "eventName": "ontime",
            "sensor_case_id": scid,
            "data": {
                "time": Date.now()
            }
        });
    });

};
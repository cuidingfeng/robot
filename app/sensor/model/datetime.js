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
            getOne({ scid: json.sensor_case_id }).then((rs) => {
                onEvent(rs.sensor_case_id, rs.formatStr, rs.status);
            });
        });
    });
};

const getOne = function ({ scid }) {
    return db.then((conn) => {
        return conn.query(
            'select * from datetime WHERE sensor_case_id=?',
            scid
        ).then(([rows, fields]) => {
            return rows[0];
        });
    });
};

module.exports.CaseStatus = function (json) {
    return db.then((conn) => {
        return conn.query(
            'UPDATE datetime SET status = ? WHERE sensor_case_id=?',
            [json.status, json.sensor_case_id]
        ).then(([rows, fields]) => {
            if (json.status == 1) {
                getOne({ scid: json.sensor_case_id }).then((rs) => {
                    onEvent(rs.sensor_case_id, rs.formatStr, 1);
                });
            } else {
                onEvent(json.sensor_case_id, '', 0);
            }
        });
    });
};

module.exports.DeleteCase = function (json) {
    return db.then((conn) => {
        return conn.query(
            'delete from datetime WHERE sensor_case_id=?',
            json.sensor_case_id
        ).then(([rows, fields]) => {
            onEvent(json.sensor_case_id, '', 0);
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
            onEvent(rule.sensor_case_id, rule.formatStr, rule.status);
        });
    });
};

const onEvent = function (scid, formatStr, status = 1) {

    if (schedule.scheduledJobs[scid + ""]) {
        var result = schedule.cancelJob(scid + "");
    }
    if (status === 0) return;
    var mysche = schedule.scheduleJob(scid + "", formatStr, function () {
        console.log(`传感器id=${scid}, datetime发送事件`, new Date().toLocaleString());
        exxcute.send({
            "eventName": "ontime",
            "sensor_case_id": scid,
            "data": {
                "time": Date.now()
            }
        });
    });

};
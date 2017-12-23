const db = require('./db').connection,
    util = require("../lib/util");

module.exports.sensorList = function (space_time_id) {
    return db.then((conn) => {
        return conn.query(
            'select *,sensor.id as id, sensor_case.title as title2, sensor.title as title  from sensor, sensor_case WHERE sensor_case.stid=? and sensor.id=sensor_case.sid order by sensor_case.id',
            space_time_id
        )
    }).then(([list]) => {
        return list;
    });
};

module.exports.sensorEventList = function (sensor_id) {
    return db.then((conn) => {
        return conn.query(
            'select * from sensor_event WHERE sensor_id=?',
            sensor_id
        )
    }).then(([list]) => {
        return list;
    });
};

module.exports.statusList = function (space_time_id) {
    return db.then((conn) => {
        return conn.query(
            'select * from status WHERE stid=?',
            space_time_id
        )
    }).then(([list]) => {
        return list;
    });
};
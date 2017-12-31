const db = require('../db').connection;
const { saveStatus: updateStatus } = require("../space_time");
const manage = require("../manage");

module.exports = {
    getSpaceTimeId: ({ sensor_case_id, status_id }) => {
        let sql = [""];
        if (sensor_case_id) {
            sql = [
                'select stid from sensor_case WHERE id=?',
                sensor_case_id
            ]
        }else if(status_id){
            sql = [
                'select stid as stid from status WHERE id=?',
                status_id
            ]
        }
        return db.then((conn) => {
            return conn.query(
                ...sql
            )
        }).then(([rs]) => {
            return rs[0].stid;
        });
    },
    getRule: ({ sensor_case_id, eventName, status_id }) => {
        let sql = [""];
        if (sensor_case_id) {
            sql =
                [
                    `select * from rule WHERE 
                    sensor_case_id=? and 
                    event_id=(
                        select id from sensor_event where 
                            sensor_id=(
                                select sid from sensor_case where id=?
                            ) 
                            and event_name=?
                    )`,
                    [sensor_case_id, sensor_case_id, eventName]
                ]
        }else if(status_id){
            sql =
                [
                    `select * from rule WHERE status_id=?`,
                    status_id
                ]
        }
        return db.then((conn) => {
            return conn.query(...sql)
        }).then(([rs]) => {
            return rs[0];
        });
    },
    getStatus: (space_time_id) => {
        return db.then((conn) => {
            return conn.query(
                'select * from status WHERE stid=?',
                space_time_id
            )
        }).then(([rs]) => {
            let _status = {}, //内部保存数据
                $status = {}; //设置了访问器，对外使用
            rs.map(({ name, value, id }) => {
                _status[name] = value;
                Object.defineProperty($status, name, {
                    get: function () {
                        return _status[name]
                    },
                    set: function (newValue) {
                        updateStatus({
                            value: newValue
                        }, id);
                        manage.on({
                            "protocol": "local",
                            "evType": "status",
                            "status_id": id,
                            "data": {
                                value: newValue,
                                oldValue: _status[name]
                            }
                        });
                        _status[name] = newValue
                    }
                });
            });
            return $status;
        });
    }
};

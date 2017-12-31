const db = require('./db').connection,
    util = require("../lib/util");

module.exports.sensorList = function (space_time_id) {
    return db.then((conn) => {
        return conn.query(
            'select *,sensor.id as id, sensor_case.id as scid, sensor_case.alias as title2, sensor.title as title  from sensor, sensor_case WHERE sensor_case.stid=? and sensor.id=sensor_case.sid order by sensor_case.id',
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

module.exports.stRuleList = function (space_time_id, type) {
    let sql = "";
    if(type == 'sensor'){
        sql = `select 
                    *, sc.alias as title, se.title as event_name, rule.id as rule_id
               from 
                    rule, sensor_case as sc, sensor_event as se  
               WHERE 
                    sc.id=rule.sensor_case_id and 
                    se.id=rule.event_id and 
                    rule.space_time_id=? and 
                    rule.sensor_case_id is not null`
    }else if(type == "status"){
        sql = `select 
                    *, status.title as statusTitle, rule.id as rule_id
               from 
                    rule, status  
               WHERE 
                    status.id=rule.status_id and 
                    rule.space_time_id=? and 
                    rule.status_id is not null`
    }else{
        return false;
    }
    return db.then((conn) => {
        return conn.query(
            sql,
            space_time_id
        )
    }).then(([list]) => {
        return list;
    });
};


module.exports.save_rule = function (data, type) {
    if (type === 'create') {
        return createrule(data);
    } else {
        return edit(data, type);
    }
};

module.exports.del_rule = function (rule_id) {
    console.log("rule_id = ",rule_id);
    return db.then((conn) => {
        return conn.query(
            'delete from rule where id=?',
            rule_id
        )
    }).then(([rows, fields]) => {
        return "ok";
    });
};


const createrule = function (data) {
    let conn;
    return db.then((_conn) => {
        conn = _conn;
        if(data.sensor_case_id){
            return conn.query(
                'select * from rule where sensor_case_id=? and event_id=?',
                [ data.sensor_case_id, data.event_id ]
            )
        }else if(data.robot_case_id){
            return conn.query(
                'select * from rule where robot_case_id=? and action_id=?',
                [ data.robot_case_id, data.action_id ]
            )
        }else if(data.status_id){
            return conn.query(
                'select * from rule where space_time_id=? and status_id=?',
                [ data.space_time_id, data.status_id ]
            )
        }else{
            return false;
        }
        
    }).then(([rows, fields]) => {
        if (rows.length > 0) {
            //如果已经有同名的记录，就不插入新记录，返回新增记录空。
            return [{
                error: "这个事件已经存在，不能重复"
            }]
        } else {
            return conn.query(
                'insert into rule set ?',
                data
            )
        }
    }).then(([rows, fields]) => {
        return {
            res: rows,
            req: data
        };
    });
};
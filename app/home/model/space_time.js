const db = require('./db').connection,
    util = require("../lib/util"),
    sensor = require("./sensor"),
    execute = require("./execute");

module.exports.save = function (data, type) {
    if (type === 'create') {
        return createone(data);
    } else {
        return edit(data, type);
    }
};



module.exports.save_robot_case = function (data) {
    return save_robot_case(data);
};



module.exports.saveStatus = function (data, status_id) {
    if (status_id) {
        return updateStatus(data, status_id);
    } else {
        return createStatus(data);
    }
};


const createone = function (data) {
    let conn;
    data.status = 0;
    return db.then((_conn) => {
        conn = _conn;
        return conn.query(
            'insert into space_time set ?',
            data
        )
    }).then(([rows, fields]) => {
        return {
            res: rows,
            req: data
        };
    });
};

const createStatus = function (data) {
    let conn;
    return db.then((_conn) => {
        conn = _conn;
        return conn.query(
            'insert into status set ?',
            data
        )
    }).then(([rows, fields]) => {
        return {
            res: rows,
            req: data
        };
    });
};

const updateStatus = function (data, status_id) {
    let conn;
    return db.then((_conn) => {
        conn = _conn;
        return conn.query(
            'UPDATE status SET ? WHERE id=?',
            [data, status_id]
        )
    }).then(([rows, fields]) => {
        return {
            res: rows,
            req: data
        };
    });
};

const save_robot_case = function (data) {
    let conn;
    return db.then((_conn) => {
        conn = _conn;
        return conn.query(
            'insert into robot_case set ?',
            data
        )
    }).then(([rows, fields]) => {
        return {
            res: rows,
            req: data
        };
    });
};




module.exports.list = function () {
    return db.then((conn) => {
        return conn.query(
            'select * from space_time'
        )
    }).then(([rows, fields]) => {
        return rows;
    });
};

module.exports.viewStatus = function (status_id) {
    return db.then((conn) => {
        return conn.query(
            'select * from status where id=?',
            status_id
        )
    }).then(([rows, fields]) => {
        return rows;
    });
};

const statusList = function (space_time_id) {
    return db.then((conn) => {
        return conn.query(
            'select * from status where stid=?',
            space_time_id
        )
    }).then(([rows, fields]) => {
        return rows;
    });
};
module.exports.statusList = statusList;


module.exports.view = function (id) {
    return db.then((conn) => {
        return Promise.all([
            conn.query(
                'select * from space_time where id=?',
                id
            ),
            conn.query(
                'select *,sensor_case.id as scid  from sensor, sensor_case WHERE sensor_case.stid=? and sensor.id=sensor_case.sid order by sensor_case.id',
                id
            ),
            conn.query(
                'select sensor_case_attr.*, sensor_attr.*, sensor_case_attr.value as case_value  from sensor_case_attr, sensor_case, sensor_attr WHERE sensor_case.stid=? and sensor_case_attr.scid=sensor_case.id and sensor_attr.id=sensor_case_attr.said order by sensor_case_attr.scid',
                id
            ),
            conn.query(
                'select *, robot_case.id as rcid  from robot, robot_case WHERE robot_case.stid=? and robot.id=robot_case.rid order by robot_case.id',
                id
            ),
            conn.query(
                `select robot_case_attr.*, robot_attr.*, robot_case_attr.value as case_value 
                    from robot_case_attr, robot_case, robot_attr 
                    WHERE 
                    robot_case.stid=? and 
                    robot_case_attr.rcid=robot_case.id and 
                    robot_attr.id=robot_case_attr.raid 
                    order by robot_case_attr.rcid`,
                id
            ),
            statusList(id)
        ])
    }).then(([[space_time], [sensor_case], [sensor_case_attr], [robot_case], [robot_case_attr], statusList]) => {
        return {
            space_time,
            sensor_case,
            sensor_case_attr,
            robot_case,
            robot_case_attr,
            statusList
        };
    });
};

module.exports.db_sensor_case = (scid) => {
    return db.then((conn) => {
        return conn.query(
            'select * from sensor_case where id=?',
            scid
        )
    }).then(([rs]) => {
        return rs[0]
    });
};

module.exports.status_sensor_case = async function (scid, status) {
    status = status == 0 ? 1 : 0;
    return db.then((conn) => {
        return conn.query(
            'update sensor_case set status=? where id=?',
            [status, scid]
        )
    }).then(([rs]) => {
        //传感器启用状态改变，通知传感器服务商
        Promise.all([
            sensor.get_sensor_one({ scid }),
            sensor.sensor_case(scid)
        ]).then(([sensor, sensor_case]) => {
            execute.initSensor({
                sensor,
                sensor_case,
                status
            });
        });
        return "ok"
    });
};

module.exports.db_robot_case = (rcid) => {
    return db.then((conn) => {
        return conn.query(
            'select * from robot_case where id=?',
            rcid
        )
    }).then(([rs]) => {
        return rs[0]
    });
};

module.exports.del_sensor = (scid) => {
    return db.then((conn) => {
        conn.query(
            'delete from sensor_case where id=?',
            scid
        );
        conn.query(
            'delete from sensor_case_attr where scid=?',
            scid
        );
        return "ok"
    }).then((status) => {
        return status
    });
};

module.exports.del_robot = (rcid) => {
    return db.then((conn) => {
        return conn.query(
            'delete from robot_case where id=?',
            rcid
        );
    }).then((rs) => {
        return "ok"
    });
};

module.exports.del_status = (status_id) => {
    return db.then((conn) => {
        return conn.query(
            'delete from status where id=?',
            status_id
        );
    }).then((rs) => {
        return "ok"
    });
};

const edit = function (data, id) {

};
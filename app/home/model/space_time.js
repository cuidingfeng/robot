const db = require('./db').connection,
    util = require("../lib/util");

module.exports.save = function (data, type) {
    if (type === 'create') {
        return createone(data);
    } else {
        return edit(data, type);
    }
};

module.exports.save_sensor_case = function (data) {
    return save_sensor_case(data);
};

module.exports.save_sensor_case_attr = function (data) {
    return save_sensor_case_attr(data);
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


const save_sensor_case = function (data) {
    let conn;
    return db.then((_conn) => {
        conn = _conn;
        return conn.query(
            'insert into sensor_case set ?',
            data
        )
    }).then(([rows, fields]) => {
        return {
            res: rows,
            req: data
        };
    });
};

const save_sensor_case_attr = function (data) {
    let conn;
    console.log(data);
    let { sensor_case_id, datas } = data;
    return db.then((_conn) => {
        conn = _conn;
        JSON.parse(datas).forEach(element => {
            element.scid = sensor_case_id;
            save_one_case_attr(conn, element);
        });
        return true;
    });
};

const save_one_case_attr = function (conn, data) {
    return conn.query(
        'select * from sensor_case_attr where scid=? and said=?',
        [data.scid, data.said]
    ).then(([rows, fields]) => {
        console.log(rows);
        if (rows.length > 0) {
            //如果已经存在就修改，否则就添加。
            return conn.query(
                'UPDATE sensor_case_attr SET value = ? WHERE scid=? and said=?',
                [data.value, data.scid, data.said]
            )
        } else {
            return conn.query(
                'insert into sensor_case_attr set ?',
                data
            )
        }
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
            )
        ])
    }).then(([[space_time], [sensor_case], [sensor_case_attr]]) => {
        return {
            space_time,
            sensor_case,
            sensor_case_attr
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

const edit = function (data, id) {

};
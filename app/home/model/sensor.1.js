const db = require('./db').connection,
    util = require("../lib/util");

module.exports.save = function (data, type) {
    if (type === 'create') {
        return createone(data);
    } else {
        return edit(data, type);
    }
};

module.exports.delAttr = function (id) {
    return db.then((conn) => {
        return conn.query(
            'delete from sensor_attr where id=?',
            id
        )
    }).then(([rows, fields]) => {
        return "ok";
    });
};

module.exports.delEvent = function (id) {
    return db.then((conn) => {
        return conn.query(
            'delete from sensor_event where id=?',
            id
        )
    }).then(([rows, fields]) => {
        return "ok";
    });
};

module.exports.saveAttr = function (data, type) {
    if (type === 'create') {
        return createAttr(data);
    } else {
        return editAttr(data, type);
    }
};

module.exports.saveEvent = function (data, type) {
    if (type === 'create') {
        return createEvent(data);
    } else {
        return editEvent(data, type);
    }
};

module.exports.list = function () {
    return db.then((conn) => {
        return conn.query(
            'select * from sensor'
        )
    }).then(([rows, fields]) => {
        return rows;
    });
};

module.exports.view = function (id) {
    return db.then((conn) => {
        return Promise.all([
            conn.query(
                'select * from sensor where id=?',
                id
            ),
            conn.query(
                'select * from sensor_attr where sensor_id=?',
                id
            ),
            conn.query(
                'select * from sensor_event where sensor_id=?',
                id
            )
        ])
    }).then(([[sensor], [attr], [event]]) => {
        return {
            sensor: sensor,
            attr: attr,
            event: event
        };
    });
};

const createone = function (data) {
    data.secretkey = util.createSecretKey();
    let conn;
    return db.then((_conn) => {
        conn = _conn;
        return conn.query(
            'select uri from sensor where uri=? or title=?',
            [ data.uri, data.title ]
        )
    }).then(([rows, fields]) => {
        if (rows.length > 0) {
            //如果已经有同名的记录，就不插入新记录，返回新增记录空。
            return [{
                error: "这个标识或名称已经存在，不能重复"
            }]
        } else {
            return conn.query(
                'insert into sensor set ?',
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

const createAttr = function (data) {
    let conn;
    return db.then((_conn) => {
        conn = _conn;
        return conn.query(
            'select * from sensor_attr where sensor_id=? and ( attr_name=? or title=? )',
            [ data.sensor_id, data.attr_name, data.title ]
        )
    }).then(([rows, fields]) => {
        if (rows.length > 0) {
            //如果已经有同名的记录，就不插入新记录，返回新增记录空。
            return [{
                error: "这个标识或名称已经存在，不能重复"
            }]
        } else {
            return conn.query(
                'insert into sensor_attr set ?',
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

const createEvent = function (data) {
    let conn;
    return db.then((_conn) => {
        conn = _conn;
        return conn.query(
            'select * from sensor_event where sensor_id=? and ( event_name=? or title=? )',
            [ data.sensor_id, data.event_name, data.title ]
        )
    }).then(([rows, fields]) => {
        if (rows.length > 0) {
            //如果已经有同名的记录，就不插入新记录，返回新增记录空。
            return [{
                error: "这个标识或名称已经存在，不能重复"
            }]
        } else {
            return conn.query(
                'insert into sensor_event set ?',
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



const edit = function (data, id) {

};
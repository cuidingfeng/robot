const db = require('./db').connection,
    util = require("../lib/util");

module.exports.save = function (data, type) {
    if (type === 'create') {
        return createone(data);
    } else {
        return edit(data, type);
    }
};


const createone = function (data) {
    data.secretkey = util.createSecretKey();
    let conn;
    return db.then((_conn) => {
        conn = _conn;
        return conn.query(
            'select robotId from robot where robotId=? or title=?',
            [ data.robotId, data.title ]
        )
    }).then(([rows, fields]) => {
        if (rows.length > 0) {
            //如果已经有同名的记录，就不插入新记录，返回新增记录空。
            return [{
                error: "这个标识或名称已经存在，不能重复"
            }]
        } else {
            return conn.query(
                'insert into robot set ?',
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

module.exports.list = function () {
    return db.then((conn) => {
        return conn.query(
            'select * from robot'
        )
    }).then(([rows, fields]) => {
        return rows;
    });
};

module.exports.view = function (id) {
    return db.then((conn) => {
        return Promise.all([
            conn.query(
                'select * from robot where id=?',
                id
            ),
            conn.query(
                'select * from robot_attr where robot_id=?',
                id
            ),
            conn.query(
                'select * from robot_event where robot_id=?',
                id
            )
        ])
    }).then(([[robot], [attr], [event]]) => {
        return {
            robot: robot,
            attr: attr,
            event: event
        };
    });
};


module.exports.delAttr = function (id) {
    return db.then((conn) => {
        return conn.query(
            'delete from robot_attr where id=?',
            id
        )
    }).then(([rows, fields]) => {
        return "ok";
    });
};

module.exports.delEvent = function (id) {
    return db.then((conn) => {
        return conn.query(
            'delete from robot_event where id=?',
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

const createAttr = function (data) {
    let conn;
    return db.then((_conn) => {
        conn = _conn;
        return conn.query(
            'select * from robot_attr where robot_id=? and ( attr_name=? or title=? )',
            [ data.robot_id, data.attr_name, data.title ]
        )
    }).then(([rows, fields]) => {
        if (rows.length > 0) {
            //如果已经有同名的记录，就不插入新记录，返回新增记录空。
            return [{
                error: "这个标识或名称已经存在，不能重复"
            }]
        } else {
            return conn.query(
                'insert into robot_attr set ?',
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
            'select * from robot_event where robot_id=? and ( event_name=? or title=? )',
            [ data.robot_id, data.event_name, data.title ]
        )
    }).then(([rows, fields]) => {
        if (rows.length > 0) {
            //如果已经有同名的记录，就不插入新记录，返回新增记录空。
            return [{
                error: "这个标识或名称已经存在，不能重复"
            }]
        } else {
            return conn.query(
                'insert into robot_event set ?',
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
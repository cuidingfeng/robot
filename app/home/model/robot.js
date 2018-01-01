const db = require('./db').connection,
    util = require("../lib/util");

module.exports.save = function (data, type) {
    if (type === 'create') {
        return createone(data);
    } else {
        return edit(data, type);
    }
};

module.exports.robot_case = function (robot_case_id) {
    return db.then((conn) => {
        return conn.query(
            'select * from robot_case where id=?',
            robot_case_id
        )
    }).then(([rows, fields]) => {
        return rows[0];
    });
}

module.exports.save_robot_case = function (data) {
    return save_robot_case(data);
};

module.exports.edit_robot_case = function (data, robot_case_id) {
    return edit_robot_case(data, robot_case_id);
};

module.exports.save_robot_case_attr = function (data) {
    return save_robot_case_attr(data);
};

const save_robot_case_attr = function (data) {
    let conn;
    let { robot_case_id, datas } = data;
    let attrs = {};
    return db.then((_conn) => {
        conn = _conn;
        JSON.parse(datas).forEach(element => {
            element.rcid = robot_case_id;
            console.log("element: ", element);
            attrs[element.raid] = element.value;
            save_one_case_attr(conn, element);
        });
        return attrs;
    });
};


const save_one_case_attr = function (conn, data) {
    return conn.query(
        'select * from robot_case_attr where rcid=? and raid=?',
        [data.rcid, data.raid]
    ).then(([rows, fields]) => {
        if (rows.length > 0) {
            //如果已经存在就修改，否则就添加。
            return conn.query(
                'UPDATE robot_case_attr SET value = ? WHERE rcid=? and raid=?',
                [data.value, data.rcid, data.raid]
            )
        } else {
            return conn.query(
                'insert into robot_case_attr set ?',
                data
            )
        }
    });
};


const save_robot_case = function (data,) {
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


const edit_robot_case = function (data, robot_case_id) {
    let conn;
    return db.then((_conn) => {
        conn = _conn;
        return conn.query(
            'UPDATE robot_case SET ? WHERE id=?',
            [data, robot_case_id]
        )
    }).then(([rows, fields]) => {
        return {
            res: rows,
            req: data
        };
    });
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

/**
 * 获取机器人实例的所有属性
 * @param {Number} robot_case_id 
 */
module.exports.getAttrs = function (robot_case_id) {
    return db.then((conn) => {
        return conn.query(
            `select 
            ra.attr_name as keyName, rca.value as value, ra.id as id
            from robot_attr as ra, robot_case_attr as rca 
            where rca.rcid =? and ra.id  = rca.raid`,
            robot_case_id
        )
    }).then(([rows, fields]) => {
        return rows;
    });
}

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
                'select * from robot_action where robot_id=?',
                id
            )
        ])
    }).then(([[robot], [attr], [action]]) => {
        return {
            robot: robot,
            attr: attr,
            action: action
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

module.exports.delAction = function (id) {
    return db.then((conn) => {
        return conn.query(
            'delete from robot_action where id=?',
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

module.exports.saveAction = function (data, type) {
    if (type === 'create') {
        return createAction(data);
    } else {
        return editAction(data, type);
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

const createAction = function (data) {
    let conn;
    return db.then((_conn) => {
        conn = _conn;
        return conn.query(
            'select * from robot_action where robot_id=? and ( action_name=? or title=? )',
            [ data.robot_id, data.action_name, data.title ]
        )
    }).then(([rows, fields]) => {
        if (rows.length > 0) {
            //如果已经有同名的记录，就不插入新记录，返回新增记录空。
            return [{
                error: "这个标识或名称已经存在，不能重复"
            }]
        } else {
            return conn.query(
                'insert into robot_action set ?',
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
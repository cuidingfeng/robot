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


const edit = function (data, id) {

};
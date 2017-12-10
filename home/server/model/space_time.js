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
            )
        ])
    }).then(([[space_time]]) => {
        return {
            space_time: space_time
        };
    });
};

const edit = function (data, id) {

};
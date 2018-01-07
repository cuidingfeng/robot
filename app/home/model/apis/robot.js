const db = require('../db').connection;

module.exports = {
    getRobotCaseList: async (space_time_id) => {
        const [list] = await robotCases(space_time_id);
        let robot = {};
        list.map((rc)=>{
            robot[`${rc.robotId}_${rc.rcid}`] = robot[`${rc.robotId}_${rc.rcid}`] || {};
            robot[`${rc.robotId}_${rc.rcid}`][`${rc.action}`] = function(...args){
                console.log(`正在发送请求: url[${rc.uri}?action=${rc.action}&robot_case=${rc.rcid}]`);
                console.log(`发送的参数：${JSON.stringify(args)}`)
            }
        });
        
        return robot;
    }
}

const robotCases = (space_time_id) => {
    let conn;
    return db.then((_conn) => {
        conn = _conn;
        return conn.query(
            `select 
                robot_case.id as rcid, 
                robot.robotId as robotId, 
                robot_action.action_name as action,
                robot.uri as uri 
            from robot_case, robot_action, robot 
            where robot_case.stid=? and 
                robot_case.rid=robot_action.robot_id and 
                robot.id=robot_case.rid`,
            [space_time_id]
        )
    })
}
const db = require('../db').connection;
const action = require('./action');

module.exports = {
    getRobotCaseList: async (space_time_id) => {
        const [list] = await robotCases(space_time_id);
        let robot = {};
        list.map((rc)=>{
            robot[`${rc.robotId}_${rc.rcid}`] = robot[`${rc.robotId}_${rc.rcid}`] || {};
            robot[`${rc.robotId}_${rc.rcid}`][`${rc.action}`] = function(data){
                action.run({
                    robotUrl: rc.uri,
                    action: rc.action,
                    robot_case_id: rc.rcid,
                    data: data,
                    stype: rc.stype
                });
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
                robot.uri as uri,
                robot.stype as stype
            from robot_case, robot_action, robot 
            where robot_case.stid=? and 
                robot_case.rid=robot_action.robot_id and 
                robot.id=robot_case.rid`,
            [space_time_id]
        )
    })
}
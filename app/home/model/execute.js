module.exports.exec = function(robotName, data){
    if(getRobotType(robotName) === 'local'){
        localRobot(robotName, data);
    }
};

const localRobot = function(robotName, data){
    if(robotName === 'print'){
        const print = require('../../sensor/action/print');
        print.main(data);
    }
};

const getRobotType = function(name){
    if(name === 'print'){
        return "local"
    }
    return "";
};
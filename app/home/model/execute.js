let request = require("request");

module.exports.exec = function (robotName, data) {
    if (getRobotType(robotName) === 'local') {
        localRobot(robotName, data);
    }
};

const localRobot = function (robotName, data) {
    if (robotName === 'print') {
        const print = require('../../sensor/action/print');
        print.main(data);
    }
};

const getRobotType = function (name) {
    if (name === 'print') {
        return "local"
    }
    return "";
};

module.exports.initSensor = function ({ sensor, sensor_case, attr = [], status, action }) {
    let $attr = {};
    attr.map((that) => {
        $attr[that.attr_name] = that.value
    });
    if (sensor.stype == "http") {
        request.post(sensor.init_url, (error, response, body) => {
            console.warn(body);
        }).form({
            secretKey: sensor.secretKey,
            case_id: sensor_case.id,
            attr: $attr,
            status,
            action
        });
    } else if (sensor.stype == "local") {
        let sensorMain = require("../../sensor/action/" + sensor.init_url);
        sensorMain({ sensor, sensor_case, attr: $attr, status, action });
    }

};
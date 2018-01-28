/*接收标准的事件数据，根据用户设置，处理数据，然后按标准格式发送给机器人大厅*/

const lodash = require("lodash");
let execute = require("./execute"),
    sensor = require("./sensor");
let Tree = {};

const { getSpaceTimeId, getRule, getStatus } = require("./apis/main");
const Fun = require("./apis/fun");

module.exports.on = async function (conf) {
    if(conf.evType == "sensor"){
        const case_status = await sensor.get_case_status(conf.sensor_case_id);
        //传感器实例已经启用
        if(case_status == 1){
            await onSensor(conf);
        }
    }
    if(conf.evType == "status"){
        await onStatus(conf);
    }
};

const onSensor = async function(conf){
    const space_time_id = await getSpaceTimeId({ sensor_case_id: conf.sensor_case_id });
    const rule = await getRule({ sensor_case_id: conf.sensor_case_id, eventName: conf.eventName });
    const $data = conf.data,
        $code = rule.code,
        $status = await getStatus(space_time_id);

    const $fn = Fun.getFun($code);
    Fun.runFun({
        space_time_id,
        FN: $fn,
        data: $data,
        status: $status,
        type: "sensor"
    });
}

const onStatus = async function(conf){
    const space_time_id = await getSpaceTimeId({ status_id: conf.status_id });
    const rule = await getRule({ status_id: conf.status_id });
    const $data = conf.data,
        $code = rule.code,
        $status = await getStatus(space_time_id);

    const $fn = Fun.getFun($code);
    Fun.runFun({
        space_time_id,
        FN: $fn,
        data: $data,
        status: $status,
        type: "status"
    });
}

/**
 * 合并事件数据到时空
 * @param {Object} conf 
 */
const setTree = function (conf) {
    if (!Tree[conf.namespace]) {
        Tree[conf.namespace] = {
            data: {},
            attr: {}
        };
    }
    Tree[conf.namespace].data = lodash.extend(Tree[conf.namespace].data, conf.data);
    Tree[conf.namespace].attr = timeAttr(Tree[conf.namespace]);
    //console.log(JSON.stringify(Tree));
};

const timeAttr = function (obj) {
    obj.attr.dbtotal = obj.data.total * 2;
    return obj.attr;
};

const getExecTimeData = function (tree) {
    return {
        "msg": `print my time is ${tree.time.data.total}`
    }
};
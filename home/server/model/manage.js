/*接收标准的事件数据，根据用户设置，处理数据，然后按标准格式发送给机器人大厅*/

const lodash = require("lodash");
let execute = require("./execute");
let Tree = {};

module.exports.on = function(conf){
    setTree(conf);
    if(Tree['time'].attr.dbtotal % 5 === 0){
        execute.exec("print", getExecTimeData(Tree));
    }
};

const setTree = function(conf){
    if(!Tree[conf.namespace]){
        Tree[conf.namespace] = {
            data: {},
            attr: {}
        };
    }
    Tree[conf.namespace].data = lodash.extend(Tree[conf.namespace].data, conf.data);
    Tree[conf.namespace].attr = timeAttr(Tree[conf.namespace]);
    //console.log(JSON.stringify(Tree));
};

const timeAttr = function(obj){
    obj.attr.dbtotal = obj.data.total * 2;
    return obj.attr;
};

const getExecTimeData = function(tree){
    return {
        "msg": `print my time is ${tree.time.data.total}`
    }
};
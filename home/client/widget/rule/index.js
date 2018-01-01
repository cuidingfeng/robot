const $ = require("jquery");
let space_time_id,
    pageRuleId, //当前页面刚进来的的规则id
    sensor_case_id,
    robot_case_id,
    event_id,
    action_id,
    status_id,
    code,
    info,
    state,
    checkRuleId; //当前编辑的规则的id
const typeDom = $("#eventType"),
    oDom = $("#eventOther");

module.exports = (...args) => {
    [space_time_id,
        pageRuleId,
        sensor_case_id,
        robot_case_id,
        event_id,
        action_id,
        status_id,
        code,
        info,
        state] = args;
        
    checkRuleId =  pageRuleId;

    if (status_id) {
        typeDom.val("status").change();

    } else if (sensor_case_id) {
        typeDom.val("sensor").change();
    } else if (robot_case_id) {
        typeDom.val("robot").change();
    }
}

/**
 * 选择从哪里接收事件后
 */
typeDom.change(function () {
    let etype = $(this).val();
    oDom.html("");
    if (etype == "sensor") {
        sensorSelect().then((html) => {
            oDom.append(html);
            if (sensor_case_id) {
                $("#sensors").val(sensor_case_id);
            }
            oDom.find("#sensors").trigger("change");
        });
    } else if (etype == "status") {
        statusSelect().then((html) => {
            oDom.append(html);
            if (status_id) {
                $("#statuss").val(status_id);
            }
            oDom.find("#statuss").trigger("change");
        });
    }
});

/**
 * 选择某个传感器后，获取它的事件列表
 */
oDom.on("change", "#sensors", function () {
    let sensor_id = $(this).children(":selected").attr("sid"),
        sensor_case_id = $(this).val();
    sensorEventSelect(sensor_id, sensor_case_id).then((html) => {
        $("#sensor_events").remove();
        oDom.append(html);
        if (event_id) {
            $("#sensor_events").val(event_id);
        }
        oDom.find("#sensor_events").trigger("change");
    });
});

/**
 * 选择某个状态机后，刷新页面，加载它的数据
 */
oDom.on("change", "#statuss", function () {
    let rule_id = $(this).children(":selected").attr("rule_id");
    if (rule_id) {
        if(rule_id!=checkRuleId)
            location.href = `?space_time_id=${space_time_id}&rule_id=${rule_id}`
    }else{
        checkRuleId = undefined;
        $("#code, #info").val("");
    }
});

/**
 * 选择某个传感器事件后，刷新页面，加载它的数据
 */
oDom.on("change", "#sensor_events", function () {
    let rule_id = $(this).children(":selected").attr("rule_id");
    if (rule_id) {
        if(rule_id!=checkRuleId)
            location.href = `?space_time_id=${space_time_id}&rule_id=${rule_id}`
    }else{
        checkRuleId = undefined;
        $("#code, #info").val("");
    }
});


/**
 * 获取传感器列表
 */
const sensorSelect = () => {
    let optionsHtml = "";
    return $.ajax("/home/space_time/getdata", {
        data: {
            action: "sensorList",
            space_time_id
        },
        dataType: "json",
        type: "post"
    }).then(function (data) {
        if (data.error) {
            alert(data.error);
        } else {
            $.each(data.res, (i, sensor) => {
                optionsHtml += `<option value="${sensor.scid}" sid="${sensor.id}">${sensor.title}【${sensor.title2}】</option>`
            })
        }
        return `<select id="sensors">${optionsHtml}</select>`
    });
};

/**
 * 获取传感器的事件列表
 * @param {*传感器id} sensor_id 
 * @param {*传感器实例id} sensor_case_id 
 */
const sensorEventSelect = (sensor_id, sensor_case_id) => {
    let optionsHtml = "";
    return $.ajax("/home/space_time/getdata", {
        data: {
            action: "sensorEventList",
            sensor_id,
            sensor_case_id
        },
        dataType: "json",
        type: "post"
    }).then(function (data) {
        if (data.error) {
            alert(data.error);
        } else {
            $.each(data.res, (i, event) => {
                optionsHtml += `<option value="${event.id}"  rule_id="${event.rule_id || ''}">${event.title}【${event.event_name}】</option>`
            })
        }
        return `<select id="sensor_events">${optionsHtml}</select>`
    });
};

/**
 * 获取状态机列表
 */
const statusSelect = () => {
    let optionsHtml = "";
    return $.ajax("/home/space_time/getdata", {
        data: {
            action: "statusList",
            space_time_id
        },
        dataType: "json",
        type: "post"
    }).then(function (data) {
        if (data.error) {
            alert(data.error);
        } else {
            $.each(data.res, (i, status) => {
                optionsHtml += `<option value="${status.id}" rule_id="${status.rule_id || ''}">${status.title}【${status.name}】</option>`
            })
        }
        return `<select id="statuss">${optionsHtml}</select>`
    });
};

$("a[ajax=true]").click(function () {
    let url = $(this).attr("href"),
        $confirm = $(this).attr("confirm"),
        $text = $(this).text(),
        $fn = () => {
            $.get(url).then(function (data) {
                location.reload();
            });
        };
    if ($confirm == "true") {
        confirm(`确定要执行操作【${$text}】吗？`) && $fn();
    } else {
        $fn();
    }
    return false;
});


$("#create_btn").click(function () {
    let eventType = $("#eventType").val(),
        code = $("#code").val(),
        info = $("#info").val(),
        rule_id,
        post_data = {
            space_time_id,
            code,
            info,
            state: 1
        };
    if (eventType == "sensor") {
        post_data.sensor_case_id = $("#sensors").val();
        post_data.event_id = $("#sensor_events").val();
        rule_id = $("#sensor_events>option:selected").attr("rule_id");
    } else if (eventType == "status") {
        post_data.status_id = $("#statuss").val();
        rule_id = $("#statuss>option:selected").attr("rule_id");
    } else if (eventType == "robot") {
        post_data.robot_case_id = $("#robots>option:selected").attr("rcid");
        post_data.action_id = $("#robot_actions").val();
        rule_id = $("#robot_actions>option:selected").attr("rule_id");
    } else {
        alert("请选择正确的事件类型！");
        return;
    }

    $.ajax("/home/rule/save_rule", {
        data: post_data,
        dataType: "json",
        type: "post"
    }).then(function (data) {
        if (data.res.error) {
            alert(data.res.error);
        } else {
            if(rule_id){
                location.reload()
            }else{
                location.href = `?space_time_id=${space_time_id}&rule_id=${data.res.insertId}`;
            }
        }
    });
});

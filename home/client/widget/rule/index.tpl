<h1>给时空中央处理器添加规则</h1>
<p class="msg">用户在这里创建，给指定时空的中央处理器设置规则</p>
<div class="fromone">
    <label>时空名称：</label>
    <a href="/home/space_time/view?id={{ space_time.id }}">{{ space_time.title }}</a>
</div>

<div class="fromone">
    <label>设置一条规则 -</label>
    <div>事件：<select id="eventType">
        <option value="">请选择</option>
        <option value="sensor">传感器事件发生</option>
        <option value="status">状态机状态改变</option>
        <option value="robot">机器人执行结果</option>
    </select><span id="eventOther"></span></div>
    <div>逻辑代码：</div>
    <textarea class="textarea" id="code">{{rule.code}}</textarea>
    <div>规则说明：</div>
    <textarea class="textarea" id="info">{{rule.info}}</textarea>
</div>
<button class="formBtn" id="create_btn">保存规则</button>

<h2>已添加的传感器事件</h2>

{% for key, $sensorRule in sensor_rules %}
<div class="formBox">
    <div class="fromone">
        <label>传感器实例名称</label>
        <a href="/home/space_time/view_sensor_case?scid={{$sensorRule.sensor_case_id}}" target="_blank">{{ $sensorRule.title }}</a>
    </div>
    <div class="fromone">
        <label>事件名称：</label>
        <a href="/home/sensor/view?id={{$sensorRule.sensor_id}}" target="_blank">{{ $sensorRule.event_name }}</a>
    </div>
    <div class="fromone">
        <label>代码：</label>
        {{ $sensorRule.code }}
    </div>
    <div class="fromone">
        <label>规则说明：</label>
        {{ $sensorRule.info }}
    </div>
    <div class="fromone">
        <label>状态：</label>
        {{ $sensorRule.state }}
    </div>
    <div>
        <a href="?space_time_id={{space_time.id}}&rule_id={{$sensorRule.rule_id}}" target="_blank">编辑</a>
        <a href="/rule/del_rule?id={{$sensorRule.rule_id}}" confirm="true" ajax="true">删除</a>
    </div>
</div>
{% endfor %}

<h2>已添加的状态机事件</h2>

{% for key, $statusRule in status_rules %}
<div class="formBox">
    <div class="fromone">
        <label>传感器名称</label>
        <a href="/space_time/status?space_time_id={{space_time.id}}&status_id={{$statusRule.status_id}}" target="_blank">{{ $statusRule.statusTitle }}</a>
    </div>
    <div class="fromone">
        <label>代码：</label>
        {{ $statusRule.code }}
    </div>
    <div class="fromone">
        <label>规则说明：</label>
        {{ $statusRule.info }}
    </div>
    <div class="fromone">
        <label>状态：</label>
        {{ $statusRule.state }}
    </div>
    <div>
        <a href="?space_time_id={{space_time.id}}&rule_id={{$statusRule.rule_id}}" target="_blank">编辑</a>
        <a href="/rule/del_rule?id={{$statusRule.rule_id}}" confirm="true" ajax="true">删除</a>
    </div>
</div>
{% endfor %}

{% script %} 
require("./index")(
    `{{ space_time.id }}`, 
    `{{ rule.id }}`, 
    `{{ rule.sensor_case_id }}`,
    `{{ rule.robot_case_id }}`,
    `{{ rule.event_id }}`,
    `{{ rule.action_id }}`,
    `{{ rule.status_id }}`,
    `{{ rule.code }}`,
    `{{ rule.info }}`,
    `{{ rule.state }}`
); 
{% endscript %}